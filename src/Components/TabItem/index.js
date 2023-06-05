import './index.css'

const TabItem = props => {
  const {tabDetails, changeTabItem} = props
  const {tabId, displayText} = tabDetails
  const onClickTabButton = () => {
    changeTabItem(tabId)
  }

  return (
    <li className="tab-list-item">
      <button onClick={onClickTabButton} className="tab-button" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
