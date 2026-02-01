import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/app/lib/supabaseAdmin";

const KEY = "gift_amount";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("site_settings")
    .select("value")
    .eq("key", KEY)
    .single();

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, value: Number(data?.value ?? 0) });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));

  const password = String(body?.password ?? "");
  const value = Number(body?.value);

  if (!process.env.TJ_ADMIN_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: "Missing TJ_ADMIN_PASSWORD" },
      { status: 500 }
    );
  }

  if (password !== process.env.TJ_ADMIN_PASSWORD) {
    return NextResponse.json(
      { ok: false, error: "Wrong password" },
      { status: 401 }
    );
  }

  if (!Number.isFinite(value) || value < 0) {
    return NextResponse.json(
      { ok: false, error: "Invalid value" },
      { status: 400 }
    );
  }

  const { error } = await supabaseAdmin
    .from("site_settings")
    .upsert({ key: KEY, value: String(value) });

  if (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, value });
}
