import { Handlers } from "$fresh/server.ts";
import { createUser } from "../islands/db.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    return await ctx.render();
  },
  async POST(req, _ctx) {
    const form = await req.formData();
    console.debug(form.get("email"))
    //form magic connection file. i forgot how it was written, because it is hyper spesiffic and wasn't saved.
    createUser(form.get("email"), form.get("password"))
    const headers = new Headers();
    headers.set("location", "/");
    return new Response(null, {
      status: 303, // See Other
      headers,
    });
  },
};

export default function a(){
  return(
    <form method="POST">
      <div>
        <a href="/">
          Utviklerne AS
        </a>
      </div>
      <div>
        <a>
          username
        </a>
        <input type="email" name="email" value="" />
    </div>
    <div>
        <a>
          password
        </a>
        <input type="password" name="password" value="" />
      </div>
      <div>
        <button type="submit" value="submit">submit</button>
      </div>
    </form>
  )
}