const reviews = [
    {
        id: 1,
        username: "bookworm27",
        rating: 5,
        comment: "This online library is a book lover's dream come true! The collection is vast and diverse, and I appreciate the easy-to-use interface. I can't wait to keep exploring all the amazing books available on this site.",
        date: "March 31, 2023"
    },
    {
        id: 2,
        username: "novelreader88",
        rating: 4,
        comment: "I've been using this online library for a few months now, and I have to say I'm impressed. The book selection is impressive, and the search function is incredibly helpful. The only downside is that sometimes the site can be a bit slow to load.",
        date: "March 30, 2023"
    },
    {
        id: 3,
        username: "avidreader123",
        rating: 5,
        comment: "I am blown away by the quality and quantity of books available on this site. The user interface is easy to navigate, and I appreciate the ability to save books to my 'favorites' list. I highly recommend this online library to any book lover!",
        date: "March 29, 2023"
    },
    {
        id: 4,
        username: "historybuff99",
        rating: 5,
        comment: "As a history lover, I am blown away by the selection of historical books available on this site. The search function makes it easy to find exactly what I'm looking for, and I appreciate the option to sort by time period.",
        date: "March 28, 2023"
    },
    {
        id: 5,
        username: "englishmajor2023",
        rating: 4,
        comment: "I have to say, I'm pretty impressed by this online library. The selection of classic literature is top-notch, and the interface is easy to use. My only complaint is that I wish there were more modern literature options.",
        date: "March 27, 2023"
    },
    {
        id: 6,
        username: "sci_fi_fan",
        rating: 5,
        comment: "This online library has an amazing selection of science fiction books. I've been able to discover so many new authors and titles that I wouldn't have found otherwise. The site is easy to use, and the recommendations algorithm is spot on.",
        date: "March 26, 2023"
    },
    {
        id: 7,
        username: "mysterylover123",
        rating: 4,
        comment: "I really enjoy using this online library for my mystery and thriller fix. The selection is impressive, and the site is easy to navigate. My only complaint is that I wish the site offered more audiobook options.",
        date: "March 25, 2023"
    },
    {
        id: 8,
        username: "poetryenthusiast",
        rating: 5,
        comment: "I love that this online library has such a great selection of poetry books. It's not always easy to find a good poetry collection, but this site has exceeded my expectations. The interface is user-friendly, and I appreciate the 'related books' feature.",
        date: "March 24, 2023"
    },
    {
        id: 9,
        username: "romancereader4ever",
        rating: 4,
        comment: "This online library has been my go-to for all my romance novel needs. The selection is extensive, and I appreciate the ability to sort by sub-genre. My only complaint is that I wish the site offered more new releases.",
        date: "March 23, 2023"
    },
    {
        id: 10,
        username: "classiclitlover",
        rating: 5,
        comment: "This online library is a treasure trove for classic literature enthusiasts. The site is easy to use, and I love the option to read books online or download them to read later. I'm so glad I discovered this site!",
        date: "March 22, 2023"
    },
    {
        id: 11,
        username: "bibliophile88",
        rating: 4.5,
        comment: "I'm in awe of the extensive collection of books available on this online library. It's been a pleasure exploring various genres and discovering new authors. The site is user-friendly, though I wish the loading speed could be improved.",
        date: "March 21, 2023"
    },
    {
        id: 12,
        username: "fantasy_fanatic",
        rating: 5,
        comment: "The fantasy section in this online library is fantastic! I've found so many great reads here. The site's design is clean and easy to navigate, making my book hunting experience enjoyable.",
        date: "March 20, 2023"
    },
    {
        id: 13,
        username: "nonfiction_nerd",
        rating: 4.5,
        comment: "This online library offers an impressive selection of non-fiction titles. I love how the site is organized, making it easy to find books on specific topics. I just wish there were more audio versions of the books available.",
        date: "March 19, 2023"
    },
    {
        id: 14,
        username: "philosophy_buff",
        rating: 5,
        comment: "I'm impressed by the philosophy section in this online library. The selection of titles and authors is excellent, and the site is easy to navigate. I've recommended it to my fellow philosophy enthusiasts!",
        date: "March 18, 2023"
    },
    {
        id: 15,
        username: "biography_reader",
        rating: 4,
        comment: "I enjoy using this online library to explore biographies and memoirs. The collection is quite diverse, and the site is easy to use. However, I hope they can add more recent releases soon.",
        date: "March 17, 2023"
    },
    {
        id: 16,
        username: "shortstorylover",
        rating: 5,
        comment: "The short story section in this online library is a goldmine! I've discovered so many talented authors and unique stories. The site is well-organized and user-friendly, making it a pleasure to use.",
        date: "March 16, 2023"
    },
    {
        id: 17,
        username: "youngadultfan",
        rating: 4,
        comment: "I appreciate the variety of young adult books available on this online library. The site is easy to navigate, and the book recommendations are spot-on. I just wish there were more audiobook options for this genre.",
        date: "March 15, 2023"
    },
    {
        id: 18,
        username: "graphicnovelgeek",
        rating: 5,
        comment: "This online library has an impressive collection of graphic novels. The interface is easy to use, and I love the zoom feature for reading on smaller devices. I highly recommend this site for comic and graphic novel fans!",
        date: "March 14, 2023"
    },
    {
        id: 19,
        username: "cookbookcollector",
        rating: 4,
        comment: "I'm delighted with the variety of cookbooks available on this online library. The site is easy to navigate, and I love the ability to save my favorite recipes. I just hope they add more recent releases soon.",
        date: "March 13, 2023"
    },
    {
        id: 20,
        username: "childrensbooklover",
        rating: 5,
        comment: "This",
        date: "March 13, 2023",
    },
    {
        id: 21,
        username: "thriller_enthusiast",
        rating: 4.5,
        comment: "I've found so many thrilling reads on this online library. The selection of thriller novels is vast, and the site is easy to navigate. My only suggestion is to improve the site's loading speed.",
        date: "March 11, 2023"
    },
    {
        id: 22,
        username: "lifelong_learner",
        rating: 5,
        comment: "This online library has been an invaluable resource for my personal and professional development. The collection of educational and self-help books is impressive, and the site is user-friendly.",
        date: "March 10, 2023"
    },
    {
        id: 23,
        username: "travel_book_lover",
        rating: 4,
        comment: "As an avid traveler, I appreciate the variety of travel books available on this online library. The site is easy to navigate, but I hope they can add more recent travel guides soon.",
        date: "March 9, 2023"
    },
    {
        id: 24,
        username: "artbookcollector",
        rating: 5,
        comment: "The art book section in this online library is fantastic! I've discovered so many inspiring works here. The site is well-organized and easy to use, making my book browsing experience enjoyable.",
        date: "March 8, 2023"
    },
    {
        id: 25,
        username: "sciencelover",
        rating: 4.5,
        comment: "This online library offers an extensive collection of science-related books. I love the site's organization, making it easy to find books on specific scientific topics. I just wish there were more audio versions available.",
        date: "March 7, 2023"
    },
    {
        id: 26,
        username: "spiritualseeker",
        rating: 5,
        comment: "I'm impressed by the spiritual and religious book selection in this online library. The site is easy to navigate, and I've recommended it to friends looking for spiritual guidance and inspiration.",
        date: "March 6, 2023"
    },
    {
        id: 27,
        username: "historicalfictionfan",
        rating: 4,
        comment: "I enjoy using this online library to find historical fiction novels. The collection is diverse, and the site is easy to use. However, I hope they can add more recent releases soon.",
        date: "March 5, 2023"
    },
    {
        id: 28,
        username: "comedybooklover",
        rating: 5,
        comment: "This online library has a great selection of comedy and humor books. The site is well-organized and user-friendly, making it a pleasure to browse and discover new authors and titles.",
        date: "March 4, 2023"
    },
    {
        id: 29,
        username: "parentingbookreader",
        rating: 4,
        comment: "As a parent, I appreciate the variety of parenting books available on this online library. The site is easy to navigate, and I love the option to save my favorite books. I just hope they add more recent releases soon.",
        date: "March 3, 2023"
    },
    {
        id: 30,
        username: "businessbookenthusiast",
        rating: 5,
        comment: "This online library has an impressive collection of business and finance books. The site is easy to use",
        date: "March 3, 2023"
    },
    {
        id: 31,
        username: "techbookreader",
        rating: 4.5,
        comment: "This online library offers a great selection of technology and computer science books. The site is easy to navigate, and I appreciate the up-to-date content. I just wish there were more audiobooks available.",
        date: "March 2, 2023"
    },
    {
        id: 32,
        username: "sportsbookfan",
        rating: 4,
        comment: "I enjoy the sports book section in this online library. The variety of titles is good, and the site is easy to use. My only suggestion is to add more recent sports biographies and books on current trends.",
        date: "March 1, 2023"
    },
    {
        id: 33,
        username: "psychologyenthusiast",
        rating: 5,
        comment: "The psychology section in this online library is impressive. I've discovered so many fascinating books on various topics within the field. The site is user-friendly, and I highly recommend it to anyone interested in psychology.",
        date: "February 28, 2023"
    },
    {
        id: 34,
        username: "childrensliteraturelover",
        rating: 4.5,
        comment: "This online library has a wonderful selection of children's literature. It's been a valuable resource for finding age-appropriate books for my kids. I only wish there were more audiobook options for children.",
        date: "February 27, 2023"
    },
    {
        id: 35,
        username: "truecrimeaddict",
        rating: 4,
        comment: "As a true crime fan, I appreciate the selection of true crime books available on this online library. The site is easy to navigate, but I hope they can add more titles to their collection soon.",
        date: "February 26, 2023"
    },
    {
        id: 36,
        username: "musicbooklover",
        rating: 5,
        comment: "The music book section in this online library is excellent! I've discovered so many inspiring works about various musicians and music genres. The site is well-organized and easy to use, making my book browsing experience enjoyable.",
        date: "February 25, 2023"
    },
    {
        id: 37,
        username: "natureenthusiast",
        rating: 4.5,
        comment: "I love the nature and environmental book selection on this online library. The site is easy to navigate, and I appreciate the up-to-date content. I just wish there were more audiobooks available on these topics.",
        date: "February 24, 2023"
    },
    {
        id: 38,
        username: "healthandwellnessadvocate",
        rating: 4,
        comment: "This online library has a decent selection of health and wellness books. The site is easy to use, and I enjoy discovering new titles. My only suggestion is to add more recent releases on the latest health trends.",
        date: "February 23, 2023"
    },
    {
        id: 39,
        username: "autobiographyenthusiast",
        rating: 5,
        comment: "I'm impressed by the collection of autobiographies available on this online library. The site is easy to navigate, and I've found so many inspiring stories from diverse backgrounds. Highly recommended!",
        date: "February 22, 2023"
    },
    {
        id: 40,
        username: "literaryfictionlover",
        rating: 4.5,
        comment: "The literary fiction",
        date: "February 21, 2023",
    }


];
export default reviews;