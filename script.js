/*
 * Double Linked List
 */

function DoubleLinkedList(value) {
    // Element Class
    function Element(val) {
        this.key = val;
        this.next = null;
        this.prev = null;
    }

    // Creates first element of the list and stores it for reference
    this.first = new Element(value);

    // Function to add element to the list
    this.add = function (car) {
        //Verifies if first element is not null
        //if it's null, the list is empty and first element needs to be created
        if (this.first != null) {
            let pointer = this.first;
            //Do while pointer doesn't equal null;
            do {
                /*
                * Verifies if next element is null
                * if it's, that's the last element
                * and it's possible to create an element
                */
                if (pointer.next == null) {
                    pointer.next = new Element(car);
                    pointer.next.prev = pointer;
                    return "car " + car + " added";
                    break;
                } else {
                    pointer = pointer.next;
                }
            } while (pointer != null);
        } else {
            this.first = new Element(car);
            return "car " + car + " added";
        }
    };

    //Function to look for elements in the list
    this.find = function (car) {
        let pointer = this.first;
        //Do while pointer doesn't equal null;
        do {
            //Verifies if the pointer key is not the vale
            // if it's, it ends the loop
            if (pointer.key != car) {
                pointer = pointer.next;
            } else {
                break;
            }
        } while (pointer != null);
        return pointer;
    };

    //Function to remove elements from list
    this.remove = function (car) {
        let find = this.find(car);
        //Verifies if find doesn't find an element and returns null
        if (find == null) {
            return "Impossible to remove, value is doesn't exist"
        }
        // Verifies if it's first element of the list
        else if (find == this.first) {
            if (find.next != null) {
                let next2 = find.next;
                find.key = next2.key;

                /*
                * Verifies if the element after the next element is not null
                * if it's not null
                * it needs to point to the first element
                * but if it's, it will return an error when calling:
                * next.next.prev = find;
                */
               if (next2.prev != null) {
                   next2.next.prev = find;
               }
               find.next = next2.next;
               next2 = null;
               return "Delete was successful";
            } else {
                this.first = null;
                return "Delete was successful, list is empty"
            }
        }

        // Verifies if the next element is null, because it will be the last element of the list
        else if (find.next == null) {
            find.prev.next = null;
            find = null;
            return "Delete was successful";
        }

        // If it's not the last or the first element of the list then it's a middle element
        else {

            find.next.prev = find.prev;
            find.prev.next = find.next;
            find = null;
            return "Delete was successful";
        }
    };
};