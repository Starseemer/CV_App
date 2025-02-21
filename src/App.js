import TabBar from "./components/TabBar/tab_bar";
import AboutMeCard from "./components/AboutMe/about_me_card";
import TechStackCard from "./components/TechStack/tech_stack_card";
import GreetinView from "./components/Greeting/greeting_view";

import React from "react";
import CvTimelineView from "./components/CVTimeline/cv_timeline";
import ContactView from "./components/Contact/contact_view";
import ProjectsView from "./components/Projects/projects_view";
import { useEffect } from "react"

export default function App() {
	useEffect(() => {
		document.title = "Berk Yildizgörer";
	  }, [])
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
			<a name="projects"></a>
			<div class="greet auto-height">
					<ProjectsView
						projects={[
							{
								title: "EmoSync",
								description:
									"As part of my Master Project, I designed and developed a mobile application and backend system that uses LSTM and Q-learning to predict user emotions from health data. This project involved extensive research on emotion detection and machine learning, as well as the development of a user-friendly mobile application. EmoSync aims to provide users with insights into their emotional well-being, helping them to better understand and manage their mental health. \n\nIn the study that I have conducted with limited participants and short duration of 1.5 week, the model achieved an accuracy of 77% in average in predicting the user's emotion. Which is a signinifacnt improvement over the baseline model with accuracy of 72%.",
								imageUrl:
									"https://raw.githubusercontent.com/Starseemer/CV_App/refs/heads/main/public/EmoSync.svg",
							},
							{
								title: "GitHub Archive",
								description:
									"This project aims to create a verifiable archive of GithHub repositories on decentralized storage. The reasons why this is important is that GithHub is a centralized service that can at anytime decide not to offer their services anymore or easily censor repositories. Having a decentralized archive of the repository states would be beneficial for this purpose. \n\nHackFS 2024 Hackathon | Winner of Lit Protocol - Participation Prize",
								imageUrl:
									"https://ethglobal.b-cdn.net/projects/gbcfd/banner/default.jpg",
							},
							{
								title: "Smart Spectacles Eating Detection",
								description:
									"As part of my Master Seminar, I developed a headwear device designed to track eating behaviors using advanced sensor technology. I implemented three different machine learning models—SVM, LGTM, and Histogram-based Gradient Boosting (HistGB)—to detect eating patterns with high accuracy. This project involved extensive literature review and exploration of innovative sensor applications to monitor and analyze eating habits. The device aims to provide valuable insights into dietary behavior, contributing to research in health, nutrition, and wellness. This project reflects my commitment to leveraging technology for improved health outcomes.",
								imageUrl:
									"https://raw.githubusercontent.com/Starseemer/CV_App/refs/heads/main/public/EatingDetection.svg",
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
