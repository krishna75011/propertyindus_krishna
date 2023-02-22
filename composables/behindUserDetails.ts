const behindUserDetails = () => {
  const handleclick = (e) => {
    const behindUserDetails = document.querySelector("#behindUserDetails");
    const name = e.target.getAttribute("data-bs-name");
    const degination = e.target.getAttribute("data-bs-degination");
    const bio = e.target.getAttribute("data-bs-bio");
    const image = e.target.getAttribute("data-bs-image");
    const modalTitle = behindUserDetails.querySelector(".modal-title");
    const modaldegination = behindUserDetails.querySelector(".degination");
    const modalBodyInput = behindUserDetails.querySelector(".modal-body p");
    const modalimage = behindUserDetails.querySelector(".modal-body .image");

    modalTitle.textContent = name;
    modaldegination.textContent = degination;
    modalBodyInput.textContent = bio;
    modalimage.setAttribute("src", image);
  };
  return { handleclick };
};

export default behindUserDetails;
