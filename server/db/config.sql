CREATE TABLE Vasts (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	vast_url VARCHAR(600),
	vast_position VARCHAR(100) NOT NULL DEFAULT 'bottom_right',
	CONSTRAINT check_positioning CHECK (
		vast_position IN (
			'top_left', 'top_middle', 'top_right',
			'middle_left', 'middle_right', 'bottom_left',
			'bottom_middle', 'bottom_right'
		)
	),
	height INT NOT NULL DEFAULT 100,
	CONSTRAINT check_height CHECK (
		height BETWEEN 100
		AND 1000
	),
	width INT NOT NULL DEFAULT 100,
	CONSTRAINT check_width CHECK (
		width BETWEEN 100
		AND 1000
	)
);