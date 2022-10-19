import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[index];

    return (
      <>
        <Controls
          currentItem={index + 1}
          totalItems={totalItems}
          onChange={this.changeIndex}
        />
        <Progress current={index + 1} total={totalItems} />
        <Publication items={currentItem} />
      </>
    );
  }
}
