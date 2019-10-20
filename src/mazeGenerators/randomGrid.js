



        const blocked = Math.floor(Math.random() * 3);
        if (blocked === 0) {
          nodeRow.push(0);
          $cell.addClass("block");
        } else {
          nodeRow.push(1); // Indicate path
        }