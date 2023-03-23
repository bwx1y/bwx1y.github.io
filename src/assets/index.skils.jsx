import { Container, Row, Col, ProgressBar } from "react-bootstrap";

const Skills = () => {
	const skil = {
		html: 70,
		css: 20,
		javascript: 60,
		php: 10,
		python: 5,
		bash: 5,
	};

	return (
		<Container>
			<Row className="vh-100 d-flex justify-content-center align-items-center text-light">
				<Col
					md="8"
					className="border border-2 border-dark rounded"
				>
					<h1 className="text-center mb-5">
						Skills
					</h1>
					<div className="border-bottom border-dark">
						<h3>HTML</h3>
						<ProgressBar
							now={skil.html}
							label={`${skil.html}%`}
							className="mb-3"
						/>
					</div>
					<div className="border-bottom border-dark">
						<h3>CSS</h3>
						<ProgressBar
							now={skil.css}
							label={`${skil.css}%`}
							className="mb-3"
						/>
					</div>
					<div className="border-bottom border-dark">
						<h3>Javacript</h3>
						<ProgressBar
							now={skil.javascript}
							label={`${skil.javascript}%`}
							className="mb-3"
						/>
					</div>
					<div className="border-bottom border-3 border-dark">
						<h3>PHP</h3>
						<ProgressBar
							now={skil.php}
							label={`${skil.php}%`}
							className="mb-3"
						/>
					</div>
					<div className="border-bottom border-dark">
						<h3>Python</h3>
						<ProgressBar
							now={skil.python}
							label={`${skil.python}%`}
							className="mb-3"
						/>
					</div>
					<div>
						<h3>Bash</h3>
						<ProgressBar
							now={skil.bash}
							label={`${skil.bash}%`}
							className="mb-3"
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Skills;
