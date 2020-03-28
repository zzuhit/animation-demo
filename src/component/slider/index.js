import React, { PureComponent } from 'react'
import { arrayOf, number, object } from 'prop-types'
import Item from './item';

class Index extends PureComponent {
  static propTypes = {
    data: arrayOf(object),
    init: number,
  }

  constructor(props) {
    super(props)
    let list = { ...props.data }
    let addItems = []
    const { data = [], init } = props
    if (data.length > init) {
      list = data.slice(0, init);
      addItems = data.slice(init);
    }
    this.state = {
      list,
      addItems,
      showEmpty: false,
    }
  }

  // 计时器
  timer = 1;

  componentDidMount() {
    this.timer = setTimeout(this.addOne, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  addOne = () => {
    const { addItems, list } = this.state;
    if (addItems && addItems.length > 0) {
      const tempItem = { ...addItems[0] };
      tempItem.IS_ADD = true;

      this.setState({
        list: [tempItem, ...list],
        addItems: addItems.slice(1),
        showEmpty: true,
      }, () => {
        this.timer = setTimeout(this.addOne, 3000);
      });
    }
  }

  // 监听动画结束
  endTransition = () => {
    this.setState({
      showEmpty: false,
    });
  }
  
  render() {
    const { showEmpty, list } = this.state
    return (
      <div className="parent">
        <div className="empty" onTransitionEnd={this.endTransition} data-show={showEmpty} />
        {
          list.map((value, index) => (
            <Item
              key={value.id}
              data={value}
              index={index}
            />
          ))
        }
      </div>
    )
  }
}

export default Index;