import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const m = window.matchMedia(query);
		setMatches(m.matches);

		const handler = (e: any) => setMatches(e.matches);
		m.addEventListener("change", handler);

		return () => {
			m.removeEventListener("change", handler);
		}
	}, []);

	return matches;
}

export default useMediaQuery;