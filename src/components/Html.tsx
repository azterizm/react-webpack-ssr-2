import { FC } from "react";

interface InitialState {
  initialText: string
}

interface HtmlProps {
  scripts: string[],
  children: string,
  initialState?: InitialState
}

export const Html: FC<HtmlProps> = ({ children, scripts, initialState }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>SSR App</title>
    </head>
    <body>

      <div id="app" dangerouslySetInnerHTML={{ __html: children }} />

      {initialState && (
        <script dangerouslySetInnerHTML={{ __html: `window.APP_STATE=${JSON.stringify(initialState)}` }}/>
      )}

      {scripts.map((item: any, i: number) => <script key={i} src={item} />)}

    </body>
  </html>
)
