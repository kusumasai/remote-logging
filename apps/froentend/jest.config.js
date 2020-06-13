module.exports = {
  name: 'froentend',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/froentend',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
