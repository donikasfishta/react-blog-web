import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img
        className="postImg"
         src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg" width="700px"
          alt="" />
          <div className="postInfo">
              <div className="postCats">
                  <span className="postCat">Music</span>
                  <span className="postCat">Life</span>

              </div>
              <span className="postTitle">
                  Lorem Ipsum is simply dummy
             </span>
             <hr/>
            <span className="postDate">
                1 hours ago
            </span>
          </div>
          <p className="postDesc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
    </div>
  )
}
