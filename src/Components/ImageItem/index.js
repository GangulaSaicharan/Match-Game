import './index.css'

const ImageItem = props => {
  const {imageDetails, checkMatch} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickImage = () => {
    checkMatch(id)
  }
  return (
    <li>
      <button
        type="button"
        onClick={onClickImage}
        className="image-thumbnail-button"
      >
        <img className="image-item" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}
export default ImageItem
