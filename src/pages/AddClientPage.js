import ActionClient from "../components/ActionClient";
import { clientAdd } from "../utils/externalUrls";

const AddClientPage = () => {
  return (
    <ActionClient method="POST"
      url={ clientAdd }
      showPercentage={ true }
      showUsinData={ true }
      page="Adicionar"
      pageAction="adicionado/a" />);
};

export default AddClientPage;