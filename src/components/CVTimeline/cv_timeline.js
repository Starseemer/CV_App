import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./cv_timeline.css";
import Dot from "../Dot/dot";

export default function CvTimelineView() {
	return (
		<VerticalTimeline>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="Sept 2024 - Present"
				iconStyle={{
					background: "rgb(33, 150, 243)",
					color: "#ffff",
					width: "10px",
					height: "10px",
					border: "0px solid #fff",
				}}
				icon={<Dot />}
			>
				<h3 className="vertical-timeline-element-title">
					Hahn-Schickard
				</h3>
				<h4 className="vertical-timeline-element-subtitle">
					Research Asistant - Freiburg, Germany
				</h4>
				<p>
					UI Design, Research, Software Development, Machine Learning,
					Full-Stack Development
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="Sept 2023 - Sept 2024"
				iconStyle={{
					background: "rgb(33, 150, 243)",
					color: "#fff",
					width: "10px",
					height: "10px",
				}}
				icon={<Dot />}
			>
				<h3 className="vertical-timeline-element-title">
					Franhofer Institute
				</h3>
				<h4 className="vertical-timeline-element-subtitle">
					Research Asistant - Freiburg, Germany
				</h4>
				<p>Full-Stack Development, Research, HPC</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="Jul 2021 - Sep 2022"
				iconStyle={{
					background: "rgb(33, 150, 243)",
					color: "#fff",
					width: "10px",
					height: "10px",
				}}
				icon={<Dot />}
			>
				<h3 className="vertical-timeline-element-title">Siemens</h3>
				<h4 className="vertical-timeline-element-subtitle">
					Software Developer - Istanbul, Turkey
				</h4>
				<p>Full-Stack Development, Research, Machine Learning</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="Jul 2020 - Jul 2021"
				iconStyle={{
					background: "rgb(33, 150, 243)",
					color: "#fff",
					width: "10px",
					height: "10px",
				}}
				icon={<Dot />}
			>
				<h3 className="vertical-timeline-element-title">
					Huawei Technologies
				</h3>
				<h4 className="vertical-timeline-element-subtitle">
					Android Developer Engineer in Test - Istanbul, Turkey
				</h4>
				<p>Android Development, Full-Stack Development</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="Sept 2018 - Oct 2019"
				iconStyle={{
					background: "rgb(233, 30, 99)",
					color: "#fff",
					width: "10px",
					height: "10px",
				}}
				icon={<Dot />}
			>
				<h3 className="vertical-timeline-element-title">
					Kadir Has University
				</h3>
				<h4 className="vertical-timeline-element-subtitle">
					Student Asistant, Istanbul, Turkey
				</h4>
				<p>Research, Instructor, Machine Learning, IEEE Computer Society </p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="Jun 2018 - Aug 2018"
				iconStyle={{
					background: "rgb(233, 30, 99)",
					color: "#fff",
					width: "10px",
					height: "10px",
				}}
				icon={<Dot />}
			>
				<h3 className="vertical-timeline-element-title">
					IBTech, QNB Finance Subsidiary
				</h3>
				<h4 className="vertical-timeline-element-subtitle">
                    Intern - Istanbul, Turkey
				</h4>
				<p>MsSQL, Java, Toad for Oracle</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="Jul 2016 - Sep 2016"
				iconStyle={{
					background: "rgb(233, 30, 99)",
					color: "#fff",
					width: "10px",
					height: "10px",
				}}
				icon={<Dot />}
			>
				<h3 className="vertical-timeline-element-title">
                    Zeo Agency
				</h3>
				<h4 className="vertical-timeline-element-subtitle">
                    Marketing Intern
				</h4>
				<p>SEO, Marketing, Market Analysis</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				iconStyle={{
					background: "rgb(16, 204, 82)",
					color: "#fff",
					width: "10px",
					height: "10px",
				}}
				icon={<Dot />}
			/>
		</VerticalTimeline>
	);
}
