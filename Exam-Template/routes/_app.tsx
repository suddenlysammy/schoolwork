import { type PageProps } from "$fresh/server.ts";
import { Menue } from "../components/Menue.tsx";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Exam-Template</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-gray-200">
        <Menue />
        <Component />
      </body>
    </html>
  );
}
