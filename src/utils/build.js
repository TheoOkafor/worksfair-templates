const React = require('react');
const fs = require('fs');

const { mdiIcons } = require("./mdi-icons");

const labelIcons = mdiIcons.map(item => ({
  value: item.name,
  label: (
    <span className="icon">
      <i className={`mdi ${item.name} mdi-24px`} />
    </span>
  )
}));

fs.writeFileSync('./icons.js', labelIcons);