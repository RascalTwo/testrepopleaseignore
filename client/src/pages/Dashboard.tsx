import FluidIntakeForm from '../components/FluidIntakeForm';
import FluidIntakeLog from '../components/FluidIntakeLog';
import CustomizableWaterIntakeGoalForm from '../components/CustomizableWaterIntakeGoalForm';

import Navbar from '../components/Navbar';

const Dashboard = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <h1>Welcome back, username</h1>
      <>
        <CustomizableWaterIntakeGoalForm />
        <FluidIntakeForm />
        <FluidIntakeLog />
      </>
    </div>
  );
};

export default Dashboard;
