import React, { PureComponent } from 'react'
import { object, number } from 'prop-types';
import './style.less'


class Index extends PureComponent {
  static propTypes = {
    data: object,
    index: number,
  }

  constructor(props) {
    super(props)
    this.state = {
      addAnimation: props.data && props.data.IS_ADD,
    };
  }

  componentWillReceiveProps(newProps) {
    const { index } = newProps;
    if (index === 0) {
      this.itemRef.classList.add('child-animation-true');
      this.setState({
        addAnimation: true,
      });
    }
  }

  endFucntion = () => {
    this.itemRef.classList.remove('child-animation-true');
  }

  refsFunction = (element) => {
    this.itemRef = element;
  }

  render() {
    const { data, index } = this.props
    const { color } = data
    const { addAnimation } = this.state
    const style = {
      background: color,
    }

    return (
      <div 
        className={`child child-animation-${addAnimation && index === 0}`}
        style={style}
        onAnimationEnd={this.endFucntion}
        ref={this.refsFunction}
      >
        item{data.id}
      </div>
    )
  }
}

export default Index;
