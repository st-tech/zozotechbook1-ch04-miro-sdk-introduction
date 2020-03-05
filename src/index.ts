miro.onReady(() => {
  miro.initialize({
    extensionPoints: {
      bottomBar: async () => {
        const authorized = await miro.isAuthorized();
        if (authorized) {
          return {
            title: 'Add Sticker',
            svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
            onClick: async () => {
              addSticker().catch(() => {
                miro.showErrorNotification('Stickerの追加に失敗しました。');
              });
            }
          }
        }
      }
    }
  });
});

async function addSticker() {
  let widget = await miro.board.widgets.create({
    type: 'sticker', text: 'Add new sticker!'
  });

  if (widget.length > 0) {
    miro.showNotification('Stickerを追加しました。');
  } else {
    throw new Error();
  }
}
