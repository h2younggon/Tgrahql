import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Location } from "../../graphql/gql/graphql";
import { GET_LOCATIONS } from "../../graphql/location";
import { client } from "../../lib/apolloClient";

function Example({
  locations,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(locations);
  return (
    <div>
      {locations?.map((location: Location) => (
        <div key={location.id}>
          <h1>{location.name}</h1>
          <p>{location.description}</p>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await client.query({ query: GET_LOCATIONS });
    const locations: Location[] = res.data?.locations;

    return {
      props: {
        locations,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {},
  };
};

export default Example;
