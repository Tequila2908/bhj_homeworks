const tabs = document.getElementsByClassName(`tab`);
const tabsContent = document.getElementsByClassName(`tab__content`);

for (let i = 0; i < tabs.length; i++) {

    tabs.item(i).addEventListener(`click`, function() {

        if (!tabs.item(i).classList.contains(`tab_active`)) {

            for (let j = 0; j < tabs.length; j++) {
                tabs.item(j).classList.remove(`tab_active`);
                tabs.item(i).classList.add(`tab_active`);

                tabsContent.item(j).classList.remove(`tab__content_active`);
                tabsContent.item(i).classList.add(`tab__content_active`);
            }
        }
        
    })
    
}