import {SHOW_PROFILE} from "../actionTypes/profileTypes";

const initialState = {
  profile: {
    name: "John Doe",
    headline: "Welcome to my world",
    title: "a Rails Developer.",
    bio: "I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.",
    avatar: "profile-pic.png",
    expertises: ["Developer", "Programmer", "Designer", "Professional Coder", "Rails Developer"],
    socialLinks: [
      {id: 1, iconName: "facebook", url: "https://www.facebook.com/"},
      {id: 2, iconName: "github", url: "https://www.github.com/"},
      {id: 3, iconName: "linkedin", url: "https://www.linkedin.com/"},
    ],
    skills: [
      {id: 1, image: "ruby.png", alt: "ruby"},
      {id: 2, image: "javascript.png", alt: "javascript"},
      {id: 3, image: "python.png", alt: "python"},
    ],
    features: [
      {
        id: 1,
        iconName: "bars",
        title: "business strategy",
        description: "I throw myself down among the tall grass by the stream as I lie close to the earth."
      },
      {
        id: 2,
        iconName: "bookOpen",
        title: "app development",
        description: " It uses a dictionary of over 200 Latin words, combined with a handful of model sentence."
      },
      {
        id: 3,
        iconName: "tv",
        title: "app design",
        description: "I throw myself down among the tall grass by the stream as I lie close to the earth."
      },
      {
        id: 4,
        iconName: "tools",
        title: "mobile app",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority."
      },
      {
        id: 5,
        iconName: "cogs",
        title: "CEO marketing",
        description: "always free from repetition, injected humour, or non-characteristic words etc."
      },
      {
        id: 6,
        iconName: "slack",
        title: "UI & UX design",
        description: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence."
      },
    ],
    portfolios: [
      {
        id: 1,
        image: "portfolio-01.jpg",
        category: "development",
        title: "The services provide for design",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.\n" +
          "\n" +
          "Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
        reactCount: "600"
      },
      {
        id: 2,
        image: "portfolio-02.jpg",
        category: "application",
        title: "Mobile app landing design & app maintain",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.\n" +
          "\n" +
          "Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
        reactCount: "750"
      },
      {
        id: 3,
        image: "portfolio-03.jpg",
        category: "photoshop",
        title: "Logo design creativity & application",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.\n" +
          "\n" +
          "Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
        reactCount: "630"
      },
      {
        id: 4,
        image: "portfolio-04.jpg",
        category: "figma",
        title: "Mobile app landing design & services",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.\n" +
          "\n" +
          "Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
        reactCount: "360"
      },
      {
        id: 5,
        image: "portfolio-05.jpg",
        category: "web design",
        title: "Design for technology & services",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.\n" +
          "\n" +
          "Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
        reactCount: "280"
      },
      {
        id: 6,
        image: "portfolio-06.jpg",
        category: "development",
        title: "App for technology & services",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.\n" +
          "\n" +
          "Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!",
        reactCount: "690"
      },
    ]
  }
}

export const profileReducer = (state = initialState.profile, action) => {
  switch (action.type) {
    case SHOW_PROFILE:
      return {
        ...state,
        profile: action.payload
      }
    default:
      return state
  }
}
