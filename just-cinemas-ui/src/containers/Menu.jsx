import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import loadLanguages, { selectLanguages } from 'actions/menu';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Menu extends Component {
  componentWillMount() {
    this.props.loadLanguages();
  }

  onLangSelect = selectedOptions => this.props.selectLanguages(selectedOptions.map(lang => lang.value));

  getLanguages = () => this.props.languages.items.map(lang => ({ value: lang.name.toLowerCase(), label: lang.name }));

  render() {
    const { languages: { selectedLanguages } } = this.props;
    return (
      <div className="selectdiv">
        <Select
          multi
          name="lang-filter"
          onChange={this.onLangSelect}
          options={this.getLanguages()}
          placeholder="Select a language"
          value={selectedLanguages}
        />
      </div>
    );
  }
}

Menu.defaultProps = state => ({
  languages: state.languages,
});

Menu.propTypes = {
  languages: PropTypes.shape({
    items: PropTypes.array,
    selectedLanguages: PropTypes.array,
  }),
  loadLanguages: PropTypes.func.isRequired,
  selectLanguages: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  languages: state.languages,
});

const mapDispatchToProps = dispatch => ({
  loadLanguages: () => dispatch(loadLanguages()),
  selectLanguages: langs => dispatch(selectLanguages(langs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
