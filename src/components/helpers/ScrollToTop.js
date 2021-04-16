import { useEffect } from "react";
import { withRouter } from "react-router-dom";

//Function used to help scroll back to top of page when changing pages (history changed)
function ScrollToTop({ history }) {
	useEffect(() => {
		const unlisten = history.listen(() => {
			window.scrollTo(0, 0);
		});
		return () => {
			unlisten();
		};
	}, []);

	return null;
}

export default withRouter(ScrollToTop);
