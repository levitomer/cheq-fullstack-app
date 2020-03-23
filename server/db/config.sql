CREATE TABLE Vasts (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	location VARCHAR(600) NOT NULL,
	vast_url VARCHAR(600),
	position VARCHAR(100) NOT NULL DEFAULT 'bottom_right',
	CONSTRAINT check_positioning CHECK (
		position IN (
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

INSERT INTO Vasts (id, location, vast_url, position, height, width) VALUES
(1, 'Tel Aviv', 'https://visitisrael.cn/goisrael/wp-content/uploads/2018/05/telaviv121-min-1.jpg', 'bottom_right', 100, 100),
(2, 'Los Angeles', 'https://www.smartcitiesworld.net/AcuCustom/Sitename/DAM/017/LosAngeles_with_palms_Adobe.jpg', 'bottom_right', 100, 100),
(3, 'New York', 'https://i.ytimg.com/vi/gYLQThUxpvQ/maxresdefault.jpg', 'bottom_right', 100, 100),
(4, 'Val Disère', 'https://skicanadamag.com/wp-content/uploads/2019/06/valdisere-00018617.jpg', 'bottom_right', 100, 100),
(5, 'Bali', 'https://cdn.asiatatler.com/asiatatler/i/my/2019/09/10153833-0istock-653953140_cover_1920x1200.jpg', 'bottom_right', 100, 100),
(6, 'Buenos Aires', 'https://lp-cms-production.imgix.net/2019-06/4c410251e0146b2edd2b8b1d64a02047-buenos-aires.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4', 'bottom_right', 100, 100),
(7, 'Huaraz', 'https://img.theculturetrip.com/1440x807/wp-content/uploads/2017/09/whatsapp-image-2017-09-15-at-16-51-26.jpg', 'bottom_right', 100, 100),
(8, 'Ella', 'https://destinationlesstravel.com/wp-content/uploads/2019/05/DSC_9600-2-1080x667.jpg', 'bottom_right', 100, 100),
(9, 'Mayrofen', 'https://q-cf.bstatic.com/images/hotel/max1024x768/143/143515971.jpg', 'bottom_right', 100, 100);