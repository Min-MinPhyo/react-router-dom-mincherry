import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>

      <p>
        This HTML file is a template. If you open it directly in the browser,
        you will see an empty page. You can add webfonts, meta tags, or
        analytics to this file. The build step will place the bundled scripts
        into thetag. To begin the development, run `npm start` or `yarn start`.
        To create a production bundle, use `npm run build` or `yarn build`.
      </p>

      <p>
        Go to the <Link to="/">Home</Link>
      </p>
    </div>
  );
}
