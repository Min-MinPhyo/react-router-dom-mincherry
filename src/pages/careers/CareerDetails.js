import { useParams, useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career detais for {career.title}</h2>
      <p>Starting Salary : {career.salary}</p>
      <p>Location : {career.location}</p>
      <div className="details">
        <p>
          This HTML file is a template. If you open it directly in the browser,
          you will see an empty page. You can add webfonts, meta tags, or
          analytics to this file. The build step will place the bundled scripts
          into thetag. To begin the development, run `npm start` or `yarn
          start`. To create a production bundle, use `npm run build` or `yarn
          build`.
        </p>
      </div>
    </div>
  );
}

//loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("Could not find that career ");
  }
  return res.json();
};
