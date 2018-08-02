import React, { Component } from 'react'

export default class CountFilter extends Component {
  render() {
    const {counters} = this.props;
    return (
        <div className="count-list">
            <div className="field is-grouped is-grouped-multiline undone-count">
                <div className="control">
                    <div className="tags has-addons">
                        <span className="tag is-dark">总计TODO数量</span>
                        <span className="tag is-info">{counters.allList.length}</span>
                    </div>
                </div>
             </div>
             <div className="field is-grouped is-grouped-multiline done-count">
                <div className="control">
                    <div className="tags has-addons">
                        <span className="tag is-dark">未完成TODO数量</span>
                        <span className="tag is-info">{counters.notDone.length}</span>
                    </div>
                </div>
             </div>
             <div className="field is-grouped is-grouped-multiline all-count">
                <div className="control">
                    <div className="tags has-addons">
                        <span className="tag is-dark">已完成TODO数量</span>
                        <span className="tag is-info">{counters.hasDone.length}</span>
                    </div>
                </div>
             </div>
        </div>
    )
  }
}
