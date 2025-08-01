
const sideInfo = document.querySelector('#side-info') //-> will contain the file contents and github section link

// will contain the github section link -> changing acc to topic interacted with
const githubSectionLink = document.querySelector('#github-section-link')


// ! Defining contents of the page in an object
pageContents = {
  javascriptFiles: {
    slNum: 1,
    title: "Javascript Files",
    description: "Containing all javascript files, starting with the very basics, all the way to dom and events, also while being desciptively commented.",
    githubLink: "https://github.com/Soumyadeep-Dey123/Learning-JavaScript/tree/master/javascript-files"
  },
  personalLearnings: {
    slNum: 2,
    title: "Personal Learnings",
    description: "Some stuff which i learned on parralel to the core topics.",
    githubLink: "https://github.com/Soumyadeep-Dey123/Learning-JavaScript/tree/master/personal-learnings"
  },
  mainDocument: {
    slNum: 3,
    title: "Abstract document",
    description: "A compiled markdown document of all the small details and javascript files, all together in one place",
    githubLink: "https://github.com/Soumyadeep-Dey123/Learning-JavaScript/blob/master/documentation.md"
  }

}
// console.log(githubSectionLink.href);

function topicClicked(id) {
  if (id == "js-files") {
    // console.log(pageContents.javascriptFiles);
    sideInfo.innerText = pageContents.javascriptFiles.description;
    githubSectionLink.setAttribute("href", pageContents.javascriptFiles.githubLink)

  } else if (id == "personal-learnings") {
    // console.log(pageContents.personalLearnings);
    sideInfo.innerText = pageContents.personalLearnings.description;
    githubSectionLink.setAttribute("href", pageContents.personalLearnings.githubLink)
  } else if (id == "document") {
    // console.log(pageContents.mainDocument);
    sideInfo.innerText = pageContents.mainDocument.description;
    githubSectionLink.setAttribute("href", pageContents.mainDocument.githubLink)
  }
}

