import React, { Component } from 'react';
import '../assets/section_title.css';
class SectionTitle extends Component {
    render() {
        return (
            <div className='ms-2 mb-2'>
                <h3 className='section-title text-white m-0'>
                    {this.props.sectionTitle}
                </h3>
                <span className='text-secondary meta-title'>
                    {this.props.metaData}
                </span>
            </div>
        );
    }
}

export default SectionTitle;
