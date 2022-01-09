const Dashboard = () => {
    return (
        <div>Dashboard component</div>
    )
}

export async function getStaticProps(context) {
    return {
      props: {
        protected: true,
      }
    };
  }

export default Dashboard;