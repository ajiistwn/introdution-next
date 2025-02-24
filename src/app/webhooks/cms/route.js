import { CACHE_TAG_POSTS } from "@/lib/post";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
    const payload = await request.json()
    if (payload === "post") {
        revalidateTag(CACHE_TAG_POSTS)
    }


    return new Response(null, { status: 204 })
}