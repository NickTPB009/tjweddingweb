import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "registry.json");

type Store = {
  receivedAud: number;
  updatedAt: string | null;
};

async function readStore(): Promise<Store> {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    const data = JSON.parse(raw);
    return {
      receivedAud: Number(data.receivedAud ?? 0),
      updatedAt: data.updatedAt ?? null,
    };
  } catch {
    return { receivedAud: 0, updatedAt: null };
  }
}

async function writeStore(next: Store) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(next, null, 2), "utf-8");
}

// GET /api/registry  -> { receivedAud, updatedAt }
export async function GET() {
  const store = await readStore();
  return NextResponse.json(store);
}

// POST /api/registry ；body: { password, receivedAud }
export async function POST(req: Request) {
  const adminPassword = process.env.REGISTRY_ADMIN_PASSWORD;
  if (!adminPassword) {
    return NextResponse.json(
      { error: "Missing REGISTRY_ADMIN_PASSWORD in env." },
      { status: 500 }
    );
  }

  const body = (await req.json().catch(() => null)) as
    | { password?: string; receivedAud?: number }
    | null;

  const password = body?.password ?? "";
  const receivedAud = Number(body?.receivedAud);

  if (password !== adminPassword) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!Number.isFinite(receivedAud) || receivedAud < 0) {
    return NextResponse.json({ error: "Invalid receivedAud" }, { status: 400 });
  }

  const next: Store = {
    receivedAud: Math.round(receivedAud), 
    updatedAt: new Date().toISOString(),
  };

  await writeStore(next);
  return NextResponse.json(next);
}
