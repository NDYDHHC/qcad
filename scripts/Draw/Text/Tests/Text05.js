// Auto generated by Testing Dashboard
// File        : scripts/Draw/Text/Tests/Text05.js
// Timestamp   : 2015-10-05 16:34:35
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function Text05() {
    TdbTest.call(this, 'scripts/Draw/Text/Tests/Text05.js');
}

Text05.prototype = new TdbTest();

Text05.prototype.test00 = function() {
    qDebug('running Text05.test00()...');
    this.setUp();
    this.importFile('scripts/Draw/Text/Tests/data/text05.dxf');
    this.selectAll();
    this.triggerCommand('explode');
    this.deselectAll();
    this.verifyDrawing('Text05_000.dxf');
    this.tearDown();
    qDebug('finished Text05.test00()');
};
