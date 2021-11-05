import ActionClient from "../components/ActionClient";
import { clientDelete } from "../utils/externalUrls";

const DeleteClientPage = () => {
  return (
    <ActionClient
      method="DELETE"
      url={ clientDelete }
      showPercentage={ false }
      showUsinData={ false }
      page="Deletar"
      pageAction="deletado/a" />);
};

export default DeleteClientPage;