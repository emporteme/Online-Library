const mockBooks = [
	{
		id: 1,
		title: "Lessons in chemistry",
		author: "Bonnie Garmus",
		image: "/Lessons-In-Chemistry.jpg",
		description: "A scientist and single mother living in California in the 1960s becomes a star on a TV cooking show.",
		year: 2023,
		genre: "Fiction",
		pages: 180,
		fileUrl: "/Lessons-In-Chemistry.pdf"
	},
	{
		id: 2,
		title: "The cabinet of dr. Leng",
		author: "Douglas Preston",
		image: "/the-cabinet-of-dr-leng.jpg",
		description: "The 21st book in the Pendergast series. Constance Greene travels back in time to prevent the deaths of her siblings.",
		year: 1960,
		genre: "Fiction",
		pages: 2023,
		fileUrl: "/the-cabinet-of-dr-leng.pdf"
	},
	{
		id: 3,
		title: "The light we carry",
		author: "Michelle Obama",
		image: "/the-light-we-carry.jpg",
		description: "The former first lady shares personal stories and the tools she uses to deal with difficult situations.",
		year: 2023,
		genre: "Non Fiction",
		pages: 328,
		fileUrl: "/the-light-we-carry.pdf"
	},
	{
		id: 4,
		title: "The house of wolves by james patterson",
		author: "James Patterson",
		image: "/the-house-of-wolves-by-james-patterson.jpg",
		description: "After her father is murdered, Jenny Wolf becomes the head of a powerful family in California. ",
		year: 2023,
		genre: "Fiction",
		pages: 279,
		fileUrl: "/the-house-of-wolves-by-james-patterson.pdf"
	},
	{
		id: 5,
		title: "The nazi conspiracy",
		author: "Brad Meltzer",
		image: "/the-nazi-conspiracy.jpg",
		description: "A novel about teenage angst and alienation.",
		year: 2023,
		genre: "Non Fiction",
		pages: 277,
		fileUrl: "/the-nazi-conspiracy.pdf"
	}, {
		id: 6,
		title: "Tomorrow, and tomorrow, and tomorrow",
		author: "Gabrielle Zevin",
		image: "/tomorrow.jpg",
		description: "Two friends find their partnership challenged in the world of video game design.",
		year: 2023,
		genre: "Fiction",
		pages: 180,
		fileUrl: "/to-kill-a-mockingbird.pdf"
	},
	{
		id: 7,
		title: "Im glad my mom died",
		author: "Jennette McCurdy",
		image: "/im-glad-my-mom-died.jpg",
		description: "The actress and filmmaker describes her eating disorders and difficult relationship with her mother. ",
		year: 2023,
		genre: "Fiction",
		pages: 281,
		fileUrl: "/im-glad-my-mom-died.pdf"
	},
	{
		id: 8,
		title: "How to sell a haunted house",
		author: "Grady Hendrix",
		image: "/how-to-sell-a-haunted-house.jpg",
		description: "After her parents die, Louise encounters more than she expected in dealing with the family home. .",
		year: 2023,
		genre: "Fiction",
		pages: 328,
		fileUrl: "/1984.pdf"
	},
	{
		id: 9,
		title: "Straight shooter",
		author: "Stephen A. Smith",
		image: "/STRAIGHT-SHOOTER.jpg",
		description: "The ESPN analyst recounts the highs and lows of his life and career. A novel about love and social class in Georgian England.",
		year: 2023,
		genre: "Non Fiction",
		pages: 279,
		fileUrl: "/pride-and-prejudice.pdf"
	},
	{
		id: 10,
		title: "The house in the pines",
		author: "Ana Reyes",
		image: "/the-house-in-the-pines.jpg",
		description: "A novel about teenage angst and alienation.",
		year: 1951,
		genre: "Fiction",
		pages: 277,
		fileUrl: "/the-catcher-in-the-rye.pdf"
	},
	{
		id: 11,
		title: "Friends, lovers, and the big terrible thing",
		author: "Matthew Perry",
		image: "/9781250866448.jpg",
		description: "The actor, known for playing Chandler Bing on “Friends,” shares stories from his childhood and his struggles with sobriety. ",
		year: 1925,
		genre: "Fiction",
		pages: 180,
		fileUrl: "/the-great-gatsby.pdf"
	},
	{
		id: 12,
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		image: "/to-kill-a-mockingbird.jpg",
		description: "A novel about racial injustice in the Deep South.",
		year: 1960,
		genre: "Fiction",
		pages: 281,
		fileUrl: "/to-kill-a-mockingbird.pdf"
	},
	{
		id: 13,
		title: "1984",
		author: "George Orwell",
		image: "/1984.jpg",
		description: "A dystopian novel about a totalitarian government.",
		year: 1949,
		genre: "Science Fiction",
		pages: 328,
		fileUrl: "/1984.pdf"
	},
	{
		id: 14,
		title: "Pride and Prejudice",
		author: "Jane Austen",
		image: "/pride-and-prejudice.jpg",
		description: "A novel about love and social class in Georgian England.",
		year: 1813,
		genre: "Fiction",
		pages: 279,
		fileUrl: "/pride-and-prejudice.pdf"
	},
	{
		id: 15,
		title: "The Catcher in the Rye",
		author: "J.D. Salinger",
		image: "/the-catcher-in-the-rye.jpg",
		description: "A novel about teenage angst and alienation.",
		year: 1951,
		genre: "Fiction",
		pages: 277,
		fileUrl: "/the-catcher-in-the-rye.pdf"
	},
	{
		id: 16,
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		image: "/the-great-gatsby.jpg",
		description: "A novel about the decadence and excess of the Jazz Age.",
		year: 1925,
		genre: "Fiction",
		pages: 180,
		fileUrl: "/the-great-gatsby.pdf"
	},


];

export default mockBooks;
