import { Selector } from 'testcafe';
process.env.NODE_ENV = "test";

fixture`Testing Teacher UI`
    .page`http://localhost:4401/`

test('Testing search Teachers', async t => {
    await t.navigateTo("/");
    await t.typeText("#teacher-search", "su");
    await t.wait(1000);

    const table = Selector('#teacher-table');
    const rowCount = await table.find('tr').count;
    const lastRow = table.find('tr').nth(rowCount - 1);

    let tdText = await lastRow.innerText;
    await t.expect(rowCount).eql(2);
    await t.expect(tdText).contains("su");

    await t.navigateTo("/dbinitialize");
});
