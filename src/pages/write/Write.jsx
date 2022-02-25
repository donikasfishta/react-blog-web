import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img 
      className="writeImg"
      src="https://envato-shoebox-0.imgix.net/f466/9a72-e2ec-44b2-8f59-80f46434ca82/DSC_848311.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=ee62302d57f44f14580d58a5d5fad84f" width="900px"
      alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          <i className="writeIcon fa-solid fa-plus"></i>



          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />

        </div>
        <div className="writeFormGroup">
          <textarea placeholder="Tell your story"
          type="text"
          className="writeInput writeText">
          </textarea>
        </div>
        <button className="writeSubmit">Publish</button>

      </form>

    </div>
  )
}
