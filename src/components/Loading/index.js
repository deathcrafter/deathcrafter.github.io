import Loading from "react-loading";
import { LoadingSection, LoadingText } from "./style";

export default function LoadingPage(props) {
	return (
		<LoadingSection>
			<Loading type="bubbles" color="#9b78ff" height={100} width={100} />
			<LoadingText>LOADING</LoadingText>
		</LoadingSection>
	);
}
