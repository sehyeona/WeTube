export const home = (req, res) => res.render("home", {pageTitle:"Home"});
export const search = (req, res) => {
    const {query: {term: searchingBy}} = req;
    res.render("Search", {pageTitle: "search", searchingBy});
}


export const editVideo = (req, res) => {
    res.render("editVideo")
}

export const uploadVideo = (req, res) => {
    res.render("upload")
}