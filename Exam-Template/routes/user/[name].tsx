import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import { createRequest } from "../../islands/db.tsx";

/*export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}*/

export const handler: Handlers = {
  async GET(_req, ctx) {
    return await ctx.render();
  },
  async POST(req, _ctx) {
    const form = await req.formData();
    //form magic connection file. i forgot how it was written, because it is hyper spesiffic and wasn't saved.
    createRequest(form.get("request"), "pending", "1")
    const headers = new Headers();
    headers.set("location", "/");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
};

export default function a () {
  return (
    <form method="POST">
      <div>
        <textarea name="request"/>
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  )
}