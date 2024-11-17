import TabBar from "./components/TabBar/tab_bar";
import AboutMeCard from "./components/AboutMe/about_me_card";
import TechStackCard from "./components/TechStack/tech_stack_card";
import GreetinView from "./components/Greeting/greeting_view";

import React from "react";
import CvTimelineView from "./components/CVTimeline/cv_timeline";
import ContactView from "./components/Contact/contact_view";
import ProjectsView from "./components/Projects/projects_view";

export default function App() {
	return (
		<div>
			<div class="circle"></div>
			<div class="wrapper"></div>
			<TabBar />
			<FadeInSection>
				<GreetinView />
			</FadeInSection>
			<a name="about"></a>
			<div class="greet">
				<div class="row">
					<FadeInSection>
						<AboutMeCard />
					</FadeInSection>
				</div>
				<div class="row">
					<FadeInSection>
						<TechStackCard />
					</FadeInSection>
				</div>
			</div>
			<div class="greet auto-height">
				<CvTimelineView />
			</div>
			<div class="greet">
				
					<ProjectsView
						projects={[
							{
								title: "GitHub Archive",
								description:
									"This project aims to create a verifiable archive of GithHub repositories on decentralized storage. The reasons why this is important is that GithHub is a centralized service that can at anytime decide not to offer their services anymore or easily censor repositories. Having a decentralized archive of the repository states would be beneficial for this purpose. \n\nHackFS 2024 Hackathon | Winner of Lit Protocol - Participation Prize",
								imageUrl:
									"https://media.licdn.com/dms/image/v2/D4E2DAQEqQA5go7oSuA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719359430079?e=1732460400&v=beta&t=Jlcqy_xKjhv5zGIiqwbKSUhRhXLtsVb6bRCXbk7sSwk",
							},
							{
								title: "GitHub Archive",
								description:
									"This project aims to create a verifiable archive of GithHub repositories on decentralized storage. The reasons why this is important is that GithHub is a centralized service that can at anytime decide not to offer their services anymore or easily censor repositories. Having a decentralized archive of the repository states would be beneficial for this purpose. \n\nHackFS 2024 Hackathon | Winner of Lit Protocol - Participation Prize",
								imageUrl:
									"https://media.licdn.com/dms/image/v2/D4E2DAQEqQA5go7oSuA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1719359430079?e=1732460400&v=beta&t=Jlcqy_xKjhv5zGIiqwbKSUhRhXLtsVb6bRCXbk7sSwk",
							},
						]}
					/>
				
			</div>
			<a name="contact"></a>
			<div class="greet">
				<FadeInSection>
					<ContactView />
				</FadeInSection>
			</div>
		</div>
	);
}

function FadeInSection(props) {
	const [isVisible, setVisible] = React.useState(true);
	const domRef = React.useRef();
	React.useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => setVisible(entry.isIntersecting));
		});
		observer.observe(domRef.current);
		return () => observer.unobserve(domRef.current);
	}, []);
	return (
		<div
			className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
			ref={domRef}
		>
			{props.children}
		</div>
	);
}
