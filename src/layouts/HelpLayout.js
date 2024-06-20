import { NavLink, Outlet } from "react-router-dom";
export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        This HTML file is a template. If you open it directly in the browser,
        you will see an empty page. You can add webfonts, meta tags, or
        analytics to this file. The build step will place the bundled scripts
        into thetag. To begin the development, run `npm start` or `yarn start`.
        To create a production bundle, use `npm run build` or `yarn build`.
      </p>
      <nav>
        <NavLink to="faq">View th FAQ</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
