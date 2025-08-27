UPDATED CODE 1

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/date/UI5Date"
], function (Controller, JSONModel, MessageToast, UI5Date) {
    "use strict";
    return Controller.extend("com.capexrevex.capexravex.controller.capexrevex", {
        onInit: function () {
            // Get today's date
            var today = UI5Date.getInstance();
            
            // Set the calendar to start from today
            var startDate = UI5Date.getInstance(
                today.getFullYear(), 
                today.getMonth(), 
                today.getDate(), 
                8, 0 // Start at 8 AM
            );
            
            // Create appointments starting from today
            var appointments = [];
            
            // Today's appointments
            appointments.push({
                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
                title: "Team sync",
                info: "Canteen",
                type: "Type07",
                pic: "sap-icon://family-care"
            });
            
            appointments.push({
                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0),
                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0),
                title: "Client Meeting",
                info: "Conference Room",
                type: "Type01"
            });
            
            // Tomorrow's appointments
            var tomorrow = UI5Date.getInstance(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            appointments.push({
                start: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 10, 0),
                end: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 11, 30),
                title: "Project Review",
                info: "In Progress",
                type: "Type01",
                pic: "sap-icon://business-objects-experience"
            });
            
            appointments.push({
                start: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 14, 0),
                end: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 15, 0),
                title: "Training Session",
                info: "Online",
                type: "Type03",
                pic: "sap-icon://learning-assistant"
            });
            
            // Day after tomorrow
            var dayAfter = UI5Date.getInstance(tomorrow);
            dayAfter.setDate(dayAfter.getDate() + 1);
            
            appointments.push({
                start: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), 9, 0),
                end: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), 10, 0),
                title: "Team Standup",
                info: "Daily meeting",
                type: "Type07",
                pic: "sap-icon://group"
            });
            
            appointments.push({
                start: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), 13, 0),
                end: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), 14, 30),
                title: "Lunch with Client",
                info: "Restaurant",
                type: "Type02",
                pic: "sap-icon://food"
            });
            
            // Fourth day
            var fourthDay = UI5Date.getInstance(dayAfter);
            fourthDay.setDate(fourthDay.getDate() + 1);
            
            appointments.push({
                start: UI5Date.getInstance(fourthDay.getFullYear(), fourthDay.getMonth(), fourthDay.getDate(), 11, 0),
                end: UI5Date.getInstance(fourthDay.getFullYear(), fourthDay.getMonth(), fourthDay.getDate(), 12, 0),
                title: "Product Demo",
                info: "Showcase new features",
                type: "Type04",
                pic: "sap-icon://presentation"
            });
            
            // Fifth day
            var fifthDay = UI5Date.getInstance(fourthDay);
            fifthDay.setDate(fifthDay.getDate() + 1);
            
            appointments.push({
                start: UI5Date.getInstance(fifthDay.getFullYear(), fifthDay.getMonth(), fifthDay.getDate(), 10, 0),
                end: UI5Date.getInstance(fifthDay.getFullYear(), fifthDay.getMonth(), fifthDay.getDate(), 11, 30),
                title: "Planning Session",
                info: "Quarterly planning",
                type: "Type05",
                pic: "sap-icon://calendar"
            });
            
            // Initialize the view model with data
            var oViewModel = new JSONModel({
                startDate: startDate,
                people: [
                    {
                        name: "John Doe",
                        role: "Developer",
                        appointments: appointments
                    }
                ],
                selectedEvent: {
                    title: "",
                    start: UI5Date.getInstance(),
                    end: UI5Date.getInstance(),
                    info: "",
                    type: "Type01"
                },
                // Filter state
                filters: {
                    appointments: true,
                    meetings: true,
                    reservations: false,
                    categories: [],
                    showAs: [],
                    recurrence: ["single"],
                    inPerson: []
                }
            });
            
            // Create additional model with extended data using UI5Date
            var oModel = new JSONModel();
            oModel.setData({
                startDate: startDate,
                people: [
                    {
                        pic: "test-resources/sap/ui/documentation/sdk/images/John_Miller.png",
                        name: "John Miller",
                        role: "team member",
                        appointments: [
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "08", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "09", "00"),
                                title: "Team sync",
                                info: "Canteen",
                                type: "Type07",
                                pic: "sap-icon://family-care"
                            },
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "09", "0"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "11", "0"),
                                title: "Morning Sync",
                                info: "I call you",
                                type: "Type01",
                                pic: "sap-icon://call"
                            },
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "10", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "12", "00"),
                                title: "Sync Bill",
                                info: "Online",
                                type: "Type03"
                            },
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "10", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "13", "00"),
                                title: "Check Flights",
                                info: "no room",
                                type: "Type09",
                                pic: "sap-icon://flight"
                            },
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "13", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "14", "00"),
                                title: "Lunch",
                                info: "canteen",
                                type: "Type05",
                                pic: "sap-icon://private"
                            },
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "18", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "20", "00"),
                                title: "Discussion of the plan",
                                info: "Online meeting",
                                type: "Type04"
                            }
                        ]
                    },
                    {
                        pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
                        name: "Donna Moore",
                        role: "team member",
                        appointments: [
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "08", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "09", "26"),
                                title: "Team sync",
                                info: "Canteen",
                                type: "Type07",
                                pic: "sap-icon://family-care"
                            },
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "10", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "12", "00"),
                                title: "Sync John",
                                info: "Online",
                                type: "Type03"
                            },
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "11", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "12", "00"),
                                title: "Prep for planning",
                                info: "room 5",
                                type: "Type01",
                                pic: "sap-icon://family-care"
                            }
                        ]
                    },
                    {
                        pic: "test-resources/sap/ui/documentation/sdk/images/John_Miller.png",
                        name: "Alex Johnson",
                        role: "team member",
                        appointments: [
                            {
                                start: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), "09", "00"),
                                end: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), "10", "00"),
                                title: "Team sync",
                                info: "Canteen",
                                type: "Type07",
                                pic: "sap-icon://family-care"
                            },
                            {
                                start: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), "10", "00"),
                                end: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), "12", "00"),
                                title: "Project Planning",
                                info: "Conference Room",
                                type: "Type01"
                            },
                            {
                                start: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), "14", "00"),
                                end: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), "15", "00"),
                                title: "Client Call",
                                info: "Online",
                                type: "Type03"
                            }
                        ]
                    },
                    {
                        pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
                        name: "Sarah Williams",
                        role: "team member",
                        appointments: [
                            {
                                start: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), "09", "00"),
                                end: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), "10", "00"),
                                title: "Team sync",
                                info: "Canteen",
                                type: "Type07",
                                pic: "sap-icon://family-care"
                            },
                            {
                                start: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), "11", "00"),
                                end: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), "12", "30"),
                                title: "Design Review",
                                info: "Conference Room",
                                type: "Type01"
                            }
                        ]
                    }
                ]
            });
            
            // Set both models to the view
            this.getView().setModel(oViewModel, "view");
            this.getView().setModel(oModel);
        },
        
        // Role-based functionality
        roles: {
            donna: "Donna Moore",
            manager: "manager",
            admin: "admin"
        },
        
        handleRoleChange: function () {
            this.getView().getModel().refresh(true);
        },
        
        getUserRole: function() {
            return this.roles[this.byId("userRole").getSelectedKey()];
        },
        
        canModifyAppointments: function(sRole) {
            var sUserRole = this.getUserRole();
            if (sUserRole === this.roles.manager || sUserRole === this.roles.admin || sUserRole === sRole) {
                return true;
            }
        },
        
        // Drag and Drop functionality
        handleAppointmentDragEnter: function(oEvent) {
            if (this.isAppointmentOverlap(oEvent, oEvent.getParameter("calendarRow"))) {
                oEvent.preventDefault();
            }
        },
        
        handleAppointmentDrop: function (oEvent) {
            var oAppointment = oEvent.getParameter("appointment"),
                oStartDate = oEvent.getParameter("startDate"),
                oEndDate = oEvent.getParameter("endDate"),
                oCalendarRow = oEvent.getParameter("calendarRow"),
                bCopy = oEvent.getParameter("copy"),
                sTitle = oAppointment.getTitle(),
                oModel = this.getView().getModel(),
                oAppBindingContext = oAppointment.getBindingContext(),
                oRowBindingContext = oCalendarRow.getBindingContext(),
                handleAppointmentDropBetweenRows = function () {
                    var aPath = oAppBindingContext.getPath().split("/"),
                        iIndex = aPath.pop(),
                        sRowAppointmentsPath = aPath.join("/");
                    oRowBindingContext.getObject().appointments.push(
                        oModel.getProperty(oAppBindingContext.getPath())
                    );
                    oModel.getProperty(sRowAppointmentsPath).splice(iIndex, 1);
                };
            if (bCopy) { // "copy" appointment
                var oProps = Object.assign({}, oModel.getProperty(oAppointment.getBindingContext().getPath()));
                oProps.start = oStartDate;
                oProps.end = oEndDate;
                oRowBindingContext.getObject().appointments.push(oProps);
            } else { // "move" appointment
                oModel.setProperty("start", oStartDate, oAppBindingContext);
                oModel.setProperty("end", oEndDate, oAppBindingContext);
                if (oAppointment.getParent() !== oCalendarRow) {
                    handleAppointmentDropBetweenRows();
                }
            }
            oModel.refresh(true);
            MessageToast.show(oCalendarRow.getTitle() + "'s '" + "Appointment '" + sTitle + "' now starts at \n" + oStartDate + "\n and end at \n" + oEndDate + ".");
        },
        
        handleAppointmentResize: function (oEvent) {
            var oAppointment = oEvent.getParameter("appointment"),
                oStartDate = oEvent.getParameter("startDate"),
                oEndDate = oEvent.getParameter("endDate");
            if (!this.isAppointmentOverlap(oEvent, oAppointment.getParent())) {
                MessageToast.show("Appointment '" + oAppointment.getTitle() + "' now starts at \n" + oStartDate + "\n and end at \n" + oEndDate + ".");
                oAppointment
                    .setStartDate(oStartDate)
                    .setEndDate(oEndDate);
            } else {
                MessageToast.show("As a manager you can not resize events if they overlap with another events");
            }
        },
        
        handleAppointmentCreate: function (oEvent) {
            var oStartDate = oEvent.getParameter("startDate"),
                oEndDate = oEvent.getParameter("endDate"),
                oPlanningCalendarRow = oEvent.getParameter("calendarRow"),
                oModel = this.getView().getModel(),
                sPath = oPlanningCalendarRow.getBindingContext().getPath();
            oModel.getProperty(sPath).appointments.push({
                title: "New Appointment",
                start: oStartDate,
                end: oEndDate
            });
            MessageToast.show("New Appointment is created at \n" + oStartDate + "\n and end at \n" + oEndDate + ".");
            oModel.refresh(true);
        },
        
        isAppointmentOverlap: function (oEvent, oCalendarRow) {
            var oAppointment = oEvent.getParameter("appointment"),
                oStartDate = oEvent.getParameter("startDate"),
                oEndDate = oEvent.getParameter("endDate"),
                bAppointmentOverlapped;
            if (this.getUserRole() === this.roles.manager) {
                bAppointmentOverlapped = oCalendarRow.getAppointments().some(function (oCurrentAppointment) {
                    if (oCurrentAppointment === oAppointment) {
                        return;
                    }
                    var oAppStartTime = oCurrentAppointment.getStartDate().getTime(),
                        oAppEndTime = oCurrentAppointment.getEndDate().getTime();
                    if (oAppStartTime <= oStartDate.getTime() && oStartDate.getTime() < oAppEndTime) {
                        return true;
                    }
                    if (oAppStartTime < oEndDate.getTime() && oEndDate.getTime() <= oAppEndTime) {
                        return true;
                    }
                    if (oStartDate.getTime() <= oAppStartTime && oAppStartTime < oEndDate.getTime()) {
                        return true;
                    }
                });
            }
            return bAppointmentOverlapped;
        },
        
        // Toolbar and UI functionality
        onTodayPress: function () {
            var oViewModel = this.getView().getModel("view");
            oViewModel.setProperty("/startDate", UI5Date.getInstance());
            MessageToast.show("Navigated to today");
        },
        
        onViewSelectPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oViewPopover = this.byId("viewPopover");
            
            // Close other popovers
            this.byId("filterPopover").close();
            this.byId("newEventPopover").close();
            this.byId("eventDetailsPopover").close();
            
            // Toggle view popover
            if (!oViewPopover.isOpen()) {
                oViewPopover.openBy(oButton);
            } else {
                oViewPopover.close();
            }
        },
        
        onFilterPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oFilterPopover = this.byId("filterPopover");
            
            // Close other popovers
            this.byId("viewPopover").close();
            this.byId("newEventPopover").close();
            this.byId("eventDetailsPopover").close();
            
            // Toggle filter popover
            if (!oFilterPopover.isOpen()) {
                oFilterPopover.openBy(oButton);
            } else {
                oFilterPopover.close();
            }
        },
        
        onMeetNowPress: function () {
            MessageToast.show("Starting meeting now...");
        },
        
        onNewEventPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oNewEventPopover = this.byId("newEventPopover");
            
            // Close other popovers
            this.byId("viewPopover").close();
            this.byId("filterPopover").close();
            this.byId("eventDetailsPopover").close();
            
            // Toggle new event popover
            if (!oNewEventPopover.isOpen()) {
                oNewEventPopover.openBy(oButton);
            } else {
                oNewEventPopover.close();
            }
        },
        
        onNotificationPress: function () {
            MessageToast.show("No new notifications");
        },
        
        onViewSelected: function (oEvent) {
            var sSelectedView = oEvent.getParameter("listItem").getTitle();
            var oButton = this.byId("viewSelectButton");
            var oCalendar = this.byId("calendar");
            
            oButton.setText(sSelectedView);
            this.byId("viewPopover").close();
            
            // Update calendar view
            oCalendar.setViewKey(sSelectedView.replace(" ", ""));
            MessageToast.show("View changed to: " + sSelectedView);
        },
        
        onSavedViewsPress: function () {
            MessageToast.show("Saved views feature coming soon");
        },
        
        // Filter functionality
        onClearFilters: function () {
            // Reset all filter checkboxes
            this.byId("_IDGenCheckBox").setSelected(true);
            this.byId("_IDGenCheckBox1").setSelected(true);
            this.byId("_IDGenCheckBox2").setSelected(false);
            
            // Reset filter model
            var oViewModel = this.getView().getModel("view");
            oViewModel.setProperty("/filters", {
                appointments: true,
                meetings: true,
                reservations: false,
                categories: [],
                showAs: [],
                recurrence: ["single"],
                inPerson: []
            });
            
            // Apply filters
            this._applyFilters();
            MessageToast.show("All filters cleared");
        },
        
        onFilterSelect: function (oEvent) {
            var oSource = oEvent.getSource();
            var sId = oSource.getId();
            var bSelected = oEvent.getParameter("selected");
            var oViewModel = this.getView().getModel("view");
            var oFilters = oViewModel.getProperty("/filters");
            
            // Update filter model based on selection
            if (sId.includes("_IDGenCheckBox")) { // Appointments checkbox
                oFilters.appointments = bSelected;
            } else if (sId.includes("_IDGenCheckBox1")) { // Meetings checkbox
                oFilters.meetings = bSelected;
            } else if (sId.includes("_IDGenCheckBox2")) { // Reservations checkbox
                oFilters.reservations = bSelected;
            }
            
            // Update filter model
            oViewModel.setProperty("/filters", oFilters);
            
            // Apply filters
            this._applyFilters();
        },
        
        onCategoriesPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oCategoriesPopover = this.byId("categoriesPopover");
            
            // Close other popovers
            this.byId("showAsPopover").close();
            this.byId("recurrencePopover").close();
            this.byId("inPersonPopover").close();
            
            // Toggle categories popover
            if (!oCategoriesPopover.isOpen()) {
                oCategoriesPopover.openBy(oButton);
            } else {
                oCategoriesPopover.close();
            }
        },
        
        onCategorySelect: function (oEvent) {
            var sCategory = oEvent.getParameter("listItem").getTitle();
            var oViewModel = this.getView().getModel("view");
            var oFilters = oViewModel.getProperty("/filters");
            
            // Toggle category selection
            var iIndex = oFilters.categories.indexOf(sCategory);
            if (iIndex === -1) {
                oFilters.categories.push(sCategory);
            } else {
                oFilters.categories.splice(iIndex, 1);
            }
            
            // Update filter model
            oViewModel.setProperty("/filters/categories", oFilters.categories);
            
            // Apply filters
            this._applyFilters();
        },
        
        onUnselectAllCategories: function () {
            var oViewModel = this.getView().getModel("view");
            oViewModel.setProperty("/filters/categories", []);
            
            // Apply filters
            this._applyFilters();
            MessageToast.show("All categories unselected");
        },
        
        onShowAsPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oShowAsPopover = this.byId("showAsPopover");
            
            // Close other popovers
            this.byId("categoriesPopover").close();
            this.byId("recurrencePopover").close();
            this.byId("inPersonPopover").close();
            
            // Toggle show as popover
            if (!oShowAsPopover.isOpen()) {
                oShowAsPopover.openBy(oButton);
            } else {
                oShowAsPopover.close();
            }
        },
        
        onShowAsSelect: function (oEvent) {
            var oSource = oEvent.getSource();
            var sId = oSource.getId();
            var bSelected = oEvent.getParameter("selected");
            var oViewModel = this.getView().getModel("view");
            var oFilters = oViewModel.getProperty("/filters");
            
            // Update show as filter based on selection
            var sShowAsType = "";
            if (sId.includes("showAsFree")) {
                sShowAsType = "Free";
            } else if (sId.includes("showAsWorkingElsewhere")) {
                sShowAsType = "Working elsewhere";
            } else if (sId.includes("showAsTentative")) {
                sShowAsType = "Tentative";
            } else if (sId.includes("showAsBusy")) {
                sShowAsType = "Busy";
            } else if (sId.includes("showAsOutOfOffice")) {
                sShowAsType = "Out of office";
            }
            
            // Toggle show as selection
            var iIndex = oFilters.showAs.indexOf(sShowAsType);
            if (iIndex === -1 && bSelected) {
                oFilters.showAs.push(sShowAsType);
            } else if (iIndex !== -1 && !bSelected) {
                oFilters.showAs.splice(iIndex, 1);
            }
            
            // Update filter model
            oViewModel.setProperty("/filters/showAs", oFilters.showAs);
            
            // Apply filters
            this._applyFilters();
        },
        
        onRecurrencePress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oRecurrencePopover = this.byId("recurrencePopover");
            
            // Close other popovers
            this.byId("categoriesPopover").close();
            this.byId("showAsPopover").close();
            this.byId("inPersonPopover").close();
            
            // Toggle recurrence popover
            if (!oRecurrencePopover.isOpen()) {
                oRecurrencePopover.openBy(oButton);
            } else {
                oRecurrencePopover.close();
            }
        },
        
        onRecurrenceSelect: function (oEvent) {
            var oSource = oEvent.getSource();
            var sId = oSource.getId();
            var bSelected = oEvent.getParameter("selected");
            var oViewModel = this.getView().getModel("view");
            var oFilters = oViewModel.getProperty("/filters");
            
            // Update recurrence filter based on selection
            if (sId.includes("recurrenceSingle")) {
                if (bSelected) {
                    oFilters.recurrence = ["single"];
                } else {
                    oFilters.recurrence = [];
                }
            } else if (sId.includes("recurrenceSeries")) {
                if (bSelected) {
                    oFilters.recurrence = ["series"];
                } else {
                    oFilters.recurrence = [];
                }
            }
            
            // Update filter model
            oViewModel.setProperty("/filters/recurrence", oFilters.recurrence);
            
            // Apply filters
            this._applyFilters();
        },
        
        onInPersonPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oInPersonPopover = this.byId("inPersonPopover");
            
            // Close other popovers
            this.byId("categoriesPopover").close();
            this.byId("showAsPopover").close();
            this.byId("recurrencePopover").close();
            
            // Toggle in-person popover
            if (!oInPersonPopover.isOpen()) {
                oInPersonPopover.openBy(oButton);
            } else {
                oInPersonPopover.close();
            }
        },
        
        onInPersonSelect: function (oEvent) {
            var oSource = oEvent.getSource();
            var sId = oSource.getId();
            var bSelected = oEvent.getParameter("selected");
            var oViewModel = this.getView().getModel("view");
            var oFilters = oViewModel.getProperty("/filters");
            
            // Update in-person filter based on selection
            var sInPersonType = "";
            if (sId.includes("inPersonRequested")) {
                sInPersonType = "Requested";
            } else if (sId.includes("inPersonNotRequested")) {
                sInPersonType = "Not requested";
            }
            
            // Toggle in-person selection
            var iIndex = oFilters.inPerson.indexOf(sInPersonType);
            if (iIndex === -1 && bSelected) {
                oFilters.inPerson.push(sInPersonType);
            } else if (iIndex !== -1 && !bSelected) {
                oFilters.inPerson.splice(iIndex, 1);
            }
            
            // Update filter model
            oViewModel.setProperty("/filters/inPerson", oFilters.inPerson);
            
            // Apply filters
            this._applyFilters();
        },
        
        _applyFilters: function () {
            var oViewModel = this.getView().getModel("view");
            var oFilters = oViewModel.getProperty("/filters");
            var oModel = this.getView().getModel();
            var aPeople = oModel.getProperty("/people");
            
            // Create a copy of the original data
            var aFilteredPeople = JSON.parse(JSON.stringify(aPeople));
            
            // Apply filters to each person's appointments
            aFilteredPeople.forEach(function(oPerson) {
                oPerson.appointments = oPerson.appointments.filter(function(oAppointment) {
                    // Check appointment type filters
                    if (oFilters.appointments && oAppointment.type === "Type07") {
                        return true;
                    }
                    if (oFilters.meetings && oAppointment.type === "Type01") {
                        return true;
                    }
                    if (oFilters.reservations && oAppointment.type === "Type09") {
                        return true;
                    }
                    
                    // If no type filters are selected, show all appointments
                    if (!oFilters.appointments && !oFilters.meetings && !oFilters.reservations) {
                        return true;
                    }
                    
                    return false;
                });
            });
            
            // Update the model with filtered data
            oModel.setProperty("/people", aFilteredPeople);
            
            // Update filter button text based on active filters
            var sFilterText = "Filter applied";
            var aActiveFilters = [];
            
            if (oFilters.appointments) aActiveFilters.push("Appointments");
            if (oFilters.meetings) aActiveFilters.push("Meetings");
            if (oFilters.reservations) aActiveFilters.push("Reservations");
            if (oFilters.categories.length > 0) aActiveFilters.push("Categories");
            if (oFilters.showAs.length > 0) aActiveFilters.push("Show as");
            if (oFilters.recurrence.length > 0) aActiveFilters.push("Recurrence");
            if (oFilters.inPerson.length > 0) aActiveFilters.push("In-person");
            
            if (aActiveFilters.length > 0) {
                sFilterText = "Filter applied (" + aActiveFilters.length + ")";
            }
            
            this.byId("_IDGenButton7").setText(sFilterText);
        },
        
        onNewEventTypeSelected: function (oEvent) {
            var sEventType = oEvent.getParameter("listItem").getTitle();
            this.byId("newEventPopover").close();
            MessageToast.show("Creating new: " + sEventType);
            
            // Open the NewEventDialog fragment
            this._openNewEventDialog();
        },
        
        onAppointmentSelect: function (oEvent) {
            var oAppointment = oEvent.getParameter("appointment");
            var oBindingContext = oAppointment.getBindingContext();
            
            // Close other popovers
            this.byId("viewPopover").close();
            this.byId("filterPopover").close();
            this.byId("newEventPopover").close();
            
            // Get appointment data
            var oAppointmentData = oBindingContext.getObject();
            
            // Update selected event in model
            var oViewModel = this.getView().getModel("view");
            oViewModel.setProperty("/selectedEvent", {
                title: oAppointmentData.title,
                start: oAppointmentData.start,
                end: oAppointmentData.end,
                info: oAppointmentData.info || "",
                type: oAppointmentData.type || "Type01",
                icon: oAppointmentData.icon || ""
            });
            
            // Open event details popover
            this.byId("eventDetailsPopover").openBy(oEvent.getParameter("domRef"));
        },
        
        onIntervalSelect: function (oEvent) {
            var oInterval = oEvent.getParameter("interval");
            var oStartDate = oInterval.getStartDate();
            var oEndDate = oInterval.getEndDate();
            
            // Close other popovers
            this.byId("viewPopover").close();
            this.byId("filterPopover").close();
            this.byId("newEventPopover").close();
            
            // Update selected event in model with new interval
            var oViewModel = this.getView().getModel("view");
            oViewModel.setProperty("/selectedEvent", {
                title: "New Event",
                start: oStartDate,
                end: oEndDate,
                info: "",
                type: "Type01",
                icon: ""
            });
            
            // Open event details popover
            this.byId("eventDetailsPopover").openBy(oEvent.getParameter("domRef"));
        },
        
        _openEventDetailsPopoverForNew: function () {
            // Create a new event for the current day
            var oToday = UI5Date.getInstance();
            oToday.setHours(9, 0, 0, 0); // Default to 9 AM
            
            var oEnd = UI5Date.getInstance(oToday);
            oEnd.setHours(10, 0, 0, 0); // Default to 10 AM
            
            // Update selected event in model
            var oViewModel = this.getView().getModel("view");
            oViewModel.setProperty("/selectedEvent", {
                title: "New Event",
                start: oToday,
                end: oEnd,
                info: "",
                type: "Type01",
                icon: ""
            });
            
            // Open event details popover
            this.byId("eventDetailsPopover").openBy(this.byId("calendar"));
        },
        
        // Fragment handling functions
        _openNewEventDialog: function() {
            if (!this._oNewEventDialog) {
                this._oNewEventDialog = sap.ui.xmlfragment(
                    "com.capexrevex.capexravex.view.NewEventDialog",
                    this
                );
                this.getView().addDependent(this._oNewEventDialog);
            }
            
            // Set default values for new event (current date from 9:00 AM to 10:00 AM)
            var oEventDate = UI5Date.getInstance();
            oEventDate.setHours(9, 0, 0, 0); // 9:00 AM
            
            var oEnd = UI5Date.getInstance(oEventDate);
            oEnd.setHours(10, 0, 0, 0); // 10:00 AM
            
            var oViewModel = this.getView().getModel("view");
            oViewModel.setProperty("/selectedEvent", {
                title: "",
                start: oEventDate,
                end: oEnd,
                info: "",
                type: "Type01",
                icon: ""
            });
            
            this._oNewEventDialog.open();
        },
        
        onSaveEventFromDialog: function() {
            // Get values from the dialog using the view model
            var oViewModel = this.getView().getModel("view");
            var oSelectedEvent = oViewModel.getProperty("/selectedEvent");
            
            var sTitle = oSelectedEvent.title;
            var oStart = oSelectedEvent.start;
            var oEnd = oSelectedEvent.end;
            var sDescription = oSelectedEvent.info;
            var sType = oSelectedEvent.type;
            
            // Get additional values from the dialog controls
            var sLocation = sap.ui.getCore().byId("eventLocation").getValue();
            var bAllDay = sap.ui.getCore().byId("allDay").getSelected();
            var bInPerson = sap.ui.getCore().byId("inPerson").getSelected();
            
            // Validate required fields
            if (!sTitle) {
                MessageToast.show("Please enter a title for the event");
                return;
            }
            
            // If all day event, set start to beginning of day and end to end of day
            if (bAllDay) {
                oStart.setHours(0, 0, 0, 0);
                oEnd.setHours(23, 59, 59, 999);
            }
            
            // Validate that end time is after start time
            if (oEnd <= oStart) {
                MessageToast.show("End time must be after start time");
                return;
            }
            
            // Create the new appointment object
            var newAppointment = {
                title: sTitle,
                start: oStart,
                end: oEnd,
                info: sLocation || (bInPerson ? "In-person event" : "Online event"),
                type: sType,
                pic: this._getIconForType(sType),
                tentative: false
            };
            
            // Get the model and add the new appointment to the first person's calendar
            var oModel = this.getView().getModel();
            var aPeople = oModel.getProperty("/people");
            
            if (aPeople && aPeople.length > 0) {
                // Add to the first person's appointments
                aPeople[0].appointments.push(newAppointment);
                
                // Update the model
                oModel.setProperty("/people", aPeople);
                
                // Show success message
                MessageToast.show("Event '" + sTitle + "' has been created and added to your calendar");
                
                // Close the dialog
                if (this._oNewEventDialog) {
                    this._oNewEventDialog.close();
                }
                
                // Refresh the calendar to show the new appointment
                this.byId("calendar").getBinding("rows").refresh(true);
            } else {
                MessageToast.show("Error: Could not find calendar to add event");
            }
        },
        
        _getIconForType: function(sType) {
            switch(sType) {
                case "Type01": return "sap-icon://meeting";
                case "Type02": return "sap-icon://private";
                case "Type03": return "sap-icon://business-objects-experience";
                case "Type04": return "sap-icon://priority";
                case "Type05": return "sap-icon://flight";
                case "Type06": return "sap-icon://globe";
                case "Type07": return "sap-icon://family-care";
                case "Type08": return "sap-icon://cancel";
                case "Type09": return "sap-icon://calendar";
                default: return "sap-icon://calendar";
            }
        },
        
        onCancelEventFromDialog: function() {
            // Close the dialog without saving
            if (this._oNewEventDialog) {
                this._oNewEventDialog.close();
            }
            MessageToast.show("Event creation cancelled");
        },
        
        onSaveEvent: function () {
            var oViewModel = this.getView().getModel("view");
            var oSelectedEvent = oViewModel.getProperty("/selectedEvent");
            
            // Here you would typically save the event to your backend or model
            // For this example, we'll just show a message
            
            MessageToast.show("Event '" + oSelectedEvent.title + "' saved successfully");
            
            // Close the popover
            this.byId("eventDetailsPopover").close();
            
            // Refresh the calendar to show the new/updated event
            this.byId("calendar").getBinding("rows").refresh();
        },
        
        onDiscardEvent: function () {
            // Close the popover without saving
            this.byId("eventDetailsPopover").close();
            MessageToast.show("Changes discarded");
        },
        
        onExit: function() {
            // Clean up the fragment when the controller is destroyed
            if (this._oNewEventDialog) {
                this._oNewEventDialog.destroy();
                this._oNewEventDialog = null;
            }
        }
    });
});


sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/date/UI5Date"
], function (Controller, JSONModel, MessageToast, UI5Date) {
    "use strict";
    return Controller.extend("com.capexrevex.capexravex.controller.capexrevex", {
        onInit: function () {
            // Get today's date
            var today = UI5Date.getInstance();
            
            // Set the calendar to start from today
            var startDate = UI5Date.getInstance(
                today.getFullYear(), 
                today.getMonth(), 
                today.getDate(), 
                8, 0 // Start at 8 AM
            );
            
            // Create appointments starting from today
            var appointments = [];
            
            // Today's appointments
            appointments.push({
                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), 10, 0),
                title: "Team sync",
                info: "Canteen",
                type: "Type07",
                pic: "sap-icon://family-care"
            });
            
            appointments.push({
                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), 11, 0),
                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0),
                title: "Client Meeting",
                info: "Conference Room",
                type: "Type01"
            });
            
            // Tomorrow's appointments
            var tomorrow = UI5Date.getInstance(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            appointments.push({
                start: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 10, 0),
                end: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 11, 30),
                title: "Project Review",
                info: "In Progress",
                type: "Type01",
                pic: "sap-icon://business-objects-experience"
            });
            
            appointments.push({
                start: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 14, 0),
                end: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 15, 0),
                title: "Training Session",
                info: "Online",
                type: "Type03",
                pic: "sap-icon://learning-assistant"
            });
            
            // Day after tomorrow
            var dayAfter = UI5Date.getInstance(tomorrow);
            dayAfter.setDate(dayAfter.getDate() + 1);
            
            appointments.push({
                start: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), 9, 0),
                end: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), 10, 0),
                title: "Team Standup",
                info: "Daily meeting",
                type: "Type07",
                pic: "sap-icon://group"
            });
            
            appointments.push({
                start: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), 13, 0),
                end: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), 14, 30),
                title: "Lunch with Client",
                info: "Restaurant",
                type: "Type02",
                pic: "sap-icon://food"
            });
            
            // Fourth day
            var fourthDay = UI5Date.getInstance(dayAfter);
            fourthDay.setDate(fourthDay.getDate() + 1);
            
            appointments.push({
                start: UI5Date.getInstance(fourthDay.getFullYear(), fourthDay.getMonth(), fourthDay.getDate(), 11, 0),
                end: UI5Date.getInstance(fourthDay.getFullYear(), fourthDay.getMonth(), fourthDay.getDate(), 12, 0),
                title: "Product Demo",
                info: "Showcase new features",
                type: "Type04",
                pic: "sap-icon://presentation"
            });
            
            // Fifth day
            var fifthDay = UI5Date.getInstance(fourthDay);
            fifthDay.setDate(fifthDay.getDate() + 1);
            
            appointments.push({
                start: UI5Date.getInstance(fifthDay.getFullYear(), fifthDay.getMonth(), fifthDay.getDate(), 10, 0),
                end: UI5Date.getInstance(fifthDay.getFullYear(), fifthDay.getMonth(), fifthDay.getDate(), 11, 30),
                title: "Planning Session",
                info: "Quarterly planning",
                type: "Type05",
                pic: "sap-icon://calendar"
            });
            
            // Initialize the view model with data
            var oViewModel = new JSONModel({
                startDate: startDate,
                people: [
                    {
                        name: "John Doe",
                        role: "Developer",
                        appointments: appointments
                    }
                ],
                selectedEvent: {
                    title: "",
                    start: UI5Date.getInstance(),
                    end: UI5Date.getInstance(),
                    info: "",
                    type: "Type01"
                }
            });
            
            // Create additional model with extended data using UI5Date
            var oModel = new JSONModel();
            oModel.setData({
                startDate: startDate,
                people: [
                    {
                        pic: "test-resources/sap/ui/documentation/sdk/images/John_Miller.png",
                        name: "John Miller",
                        role: "team member",
                        appointments: [
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "08", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "09", "00"),
                                title: "Team sync",
                                info: "Canteen",
                                type: "Type07",
                                pic: "sap-icon://family-care"
                            },
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "09", "0"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "11", "0"),
                                title: "Morning Sync",
                                info: "I call you",
                                type: "Type01",
                                pic: "sap-icon://call"
                            },
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "10", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "12", "00"),
                                title: "Sync Bill",
                                info: "Online",
                                type: "Type03"
                            },
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "10", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "13", "00"),
                                title: "Check Flights",
                                info: "no room",
                                type: "Type09",
                                pic: "sap-icon://flight"
                            },
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "13", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "14", "00"),
                                title: "Lunch",
                                info: "canteen",
                                type: "Type05",
                                pic: "sap-icon://private"
                            },
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "18", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "20", "00"),
                                title: "Discussion of the plan",
                                info: "Online meeting",
                                type: "Type04"
                            }
                        ]
                    },
                    {
                        pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
                        name: "Donna Moore",
                        role: "team member",
                        appointments: [
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "08", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "09", "26"),
                                title: "Team sync",
                                info: "Canteen",
                                type: "Type07",
                                pic: "sap-icon://family-care"
                            },
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "10", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "12", "00"),
                                title: "Sync John",
                                info: "Online",
                                type: "Type03"
                            },
                            {
                                start: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "11", "00"),
                                end: UI5Date.getInstance(today.getFullYear(), today.getMonth(), today.getDate(), "12", "00"),
                                title: "Prep for planning",
                                info: "room 5",
                                type: "Type01",
                                pic: "sap-icon://family-care"
                            }
                        ]
                    },
                    {
                        pic: "test-resources/sap/ui/documentation/sdk/images/John_Miller.png",
                        name: "Alex Johnson",
                        role: "team member",
                        appointments: [
                            {
                                start: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), "09", "00"),
                                end: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), "10", "00"),
                                title: "Team sync",
                                info: "Canteen",
                                type: "Type07",
                                pic: "sap-icon://family-care"
                            },
                            {
                                start: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), "10", "00"),
                                end: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), "12", "00"),
                                title: "Project Planning",
                                info: "Conference Room",
                                type: "Type01"
                            },
                            {
                                start: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), "14", "00"),
                                end: UI5Date.getInstance(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), "15", "00"),
                                title: "Client Call",
                                info: "Online",
                                type: "Type03"
                            }
                        ]
                    },
                    {
                        pic: "test-resources/sap/ui/documentation/sdk/images/Donna_Moore.jpg",
                        name: "Sarah Williams",
                        role: "team member",
                        appointments: [
                            {
                                start: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), "09", "00"),
                                end: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), "10", "00"),
                                title: "Team sync",
                                info: "Canteen",
                                type: "Type07",
                                pic: "sap-icon://family-care"
                            },
                            {
                                start: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), "11", "00"),
                                end: UI5Date.getInstance(dayAfter.getFullYear(), dayAfter.getMonth(), dayAfter.getDate(), "12", "30"),
                                title: "Design Review",
                                info: "Conference Room",
                                type: "Type01"
                            }
                        ]
                    }
                ]
            });
            
            // Set both models to the view
            this.getView().setModel(oViewModel, "view");
            this.getView().setModel(oModel);
        },
        
        // Role-based functionality
        roles: {
            donna: "Donna Moore",
            manager: "manager",
            admin: "admin"
        },
        
        handleRoleChange: function () {
            this.getView().getModel().refresh(true);
        },
        
        getUserRole: function() {
            return this.roles[this.byId("userRole").getSelectedKey()];
        },
        
        canModifyAppointments: function(sRole) {
            var sUserRole = this.getUserRole();
            if (sUserRole === this.roles.manager || sUserRole === this.roles.admin || sUserRole === sRole) {
                return true;
            }
        },
        
        // Drag and Drop functionality
        handleAppointmentDragEnter: function(oEvent) {
            if (this.isAppointmentOverlap(oEvent, oEvent.getParameter("calendarRow"))) {
                oEvent.preventDefault();
            }
        },
        
        handleAppointmentDrop: function (oEvent) {
            var oAppointment = oEvent.getParameter("appointment"),
                oStartDate = oEvent.getParameter("startDate"),
                oEndDate = oEvent.getParameter("endDate"),
                oCalendarRow = oEvent.getParameter("calendarRow"),
                bCopy = oEvent.getParameter("copy"),
                sTitle = oAppointment.getTitle(),
                oModel = this.getView().getModel(),
                oAppBindingContext = oAppointment.getBindingContext(),
                oRowBindingContext = oCalendarRow.getBindingContext(),
                handleAppointmentDropBetweenRows = function () {
                    var aPath = oAppBindingContext.getPath().split("/"),
                        iIndex = aPath.pop(),
                        sRowAppointmentsPath = aPath.join("/");
                    oRowBindingContext.getObject().appointments.push(
                        oModel.getProperty(oAppBindingContext.getPath())
                    );
                    oModel.getProperty(sRowAppointmentsPath).splice(iIndex, 1);
                };
            if (bCopy) { // "copy" appointment
                var oProps = Object.assign({}, oModel.getProperty(oAppointment.getBindingContext().getPath()));
                oProps.start = oStartDate;
                oProps.end = oEndDate;
                oRowBindingContext.getObject().appointments.push(oProps);
            } else { // "move" appointment
                oModel.setProperty("start", oStartDate, oAppBindingContext);
                oModel.setProperty("end", oEndDate, oAppBindingContext);
                if (oAppointment.getParent() !== oCalendarRow) {
                    handleAppointmentDropBetweenRows();
                }
            }
            oModel.refresh(true);
            MessageToast.show(oCalendarRow.getTitle() + "'s '" + "Appointment '" + sTitle + "' now starts at \n" + oStartDate + "\n and end at \n" + oEndDate + ".");
        },
        
        handleAppointmentResize: function (oEvent) {
            var oAppointment = oEvent.getParameter("appointment"),
                oStartDate = oEvent.getParameter("startDate"),
                oEndDate = oEvent.getParameter("endDate");
            if (!this.isAppointmentOverlap(oEvent, oAppointment.getParent())) {
                MessageToast.show("Appointment '" + oAppointment.getTitle() + "' now starts at \n" + oStartDate + "\n and end at \n" + oEndDate + ".");
                oAppointment
                    .setStartDate(oStartDate)
                    .setEndDate(oEndDate);
            } else {
                MessageToast.show("As a manager you can not resize events if they overlap with another events");
            }
        },
        
        handleAppointmentCreate: function (oEvent) {
            var oStartDate = oEvent.getParameter("startDate"),
                oEndDate = oEvent.getParameter("endDate"),
                oPlanningCalendarRow = oEvent.getParameter("calendarRow"),
                oModel = this.getView().getModel(),
                sPath = oPlanningCalendarRow.getBindingContext().getPath();
            oModel.getProperty(sPath).appointments.push({
                title: "New Appointment",
                start: oStartDate,
                end: oEndDate
            });
            MessageToast.show("New Appointment is created at \n" + oStartDate + "\n and end at \n" + oEndDate + ".");
            oModel.refresh(true);
        },
        
        isAppointmentOverlap: function (oEvent, oCalendarRow) {
            var oAppointment = oEvent.getParameter("appointment"),
                oStartDate = oEvent.getParameter("startDate"),
                oEndDate = oEvent.getParameter("endDate"),
                bAppointmentOverlapped;
            if (this.getUserRole() === this.roles.manager) {
                bAppointmentOverlapped = oCalendarRow.getAppointments().some(function (oCurrentAppointment) {
                    if (oCurrentAppointment === oAppointment) {
                        return;
                    }
                    var oAppStartTime = oCurrentAppointment.getStartDate().getTime(),
                        oAppEndTime = oCurrentAppointment.getEndDate().getTime();
                    if (oAppStartTime <= oStartDate.getTime() && oStartDate.getTime() < oAppEndTime) {
                        return true;
                    }
                    if (oAppStartTime < oEndDate.getTime() && oEndDate.getTime() <= oAppEndTime) {
                        return true;
                    }
                    if (oStartDate.getTime() <= oAppStartTime && oAppStartTime < oEndDate.getTime()) {
                        return true;
                    }
                });
            }
            return bAppointmentOverlapped;
        },
        
        // Toolbar and UI functionality
        onTodayPress: function () {
            var oViewModel = this.getView().getModel("view");
            oViewModel.setProperty("/startDate", UI5Date.getInstance());
            MessageToast.show("Navigated to today");
        },
        
        onViewSelectPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oViewPopover = this.byId("viewPopover");
            
            // Close other popovers
            this.byId("filterPopover").close();
            this.byId("newEventPopover").close();
            this.byId("eventDetailsPopover").close();
            
            // Toggle view popover
            if (!oViewPopover.isOpen()) {
                oViewPopover.openBy(oButton);
            } else {
                oViewPopover.close();
            }
        },
        
        onFilterPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oFilterPopover = this.byId("filterPopover");
            
            // Close other popovers
            this.byId("viewPopover").close();
            this.byId("newEventPopover").close();
            this.byId("eventDetailsPopover").close();
            
            // Toggle filter popover
            if (!oFilterPopover.isOpen()) {
                oFilterPopover.openBy(oButton);
            } else {
                oFilterPopover.close();
            }
        },
        
        onMeetNowPress: function () {
            MessageToast.show("Starting meeting now...");
        },
        
        onNewEventPress: function (oEvent) {
            var oButton = oEvent.getSource();
            var oNewEventPopover = this.byId("newEventPopover");
            
            // Close other popovers
            this.byId("viewPopover").close();
            this.byId("filterPopover").close();
            this.byId("eventDetailsPopover").close();
            
            // Toggle new event popover
            if (!oNewEventPopover.isOpen()) {
                oNewEventPopover.openBy(oButton);
            } else {
                oNewEventPopover.close();
            }
        },
        
        onNotificationPress: function () {
            MessageToast.show("No new notifications");
        },
        
        onViewSelected: function (oEvent) {
            var sSelectedView = oEvent.getParameter("listItem").getTitle();
            var oButton = this.byId("viewSelectButton");
            var oCalendar = this.byId("calendar");
            
            oButton.setText(sSelectedView);
            this.byId("viewPopover").close();
            
            // Update calendar view
            oCalendar.setViewKey(sSelectedView.replace(" ", ""));
            MessageToast.show("View changed to: " + sSelectedView);
        },
        
        onSavedViewsPress: function () {
            MessageToast.show("Saved views feature coming soon");
        },
        
        onClearFilters: function () {
            // Clear all filter checkboxes
            var aCheckBoxes = this.byId("filterPopover").getItemsByType("Active");
            aCheckBoxes.forEach(function(oCheckBox) {
                if (oCheckBox.isA("sap.m.CheckBox")) {
                    oCheckBox.setSelected(false);
                }
            });
            MessageToast.show("All filters cleared");
        },
        
        onNewEventTypeSelected: function (oEvent) {
            var sEventType = oEvent.getParameter("listItem")
            this.byId("newEventPopover").close();
            MessageToast.show("Creating new: " + sEventType);
            
            // Open the RemarksDialog fragment
            this._openRemarksDialog();
        },
        
        onAppointmentSelect: function (oEvent) {
            var oAppointment = oEvent.getParameter("appointment");
            var oBindingContext = oAppointment.getBindingContext();
            
            // Close other popovers
            this.byId("viewPopover").close();
            this.byId("filterPopover").close();
            this.byId("newEventPopover").close();
            
            // Get appointment data
            var oAppointmentData = oBindingContext.getObject();
            
            // Update selected event in model
            var oViewModel = this.getView().getModel("view");
            oViewModel.setProperty("/selectedEvent", {
                title: oAppointmentData.title,
                start: oAppointmentData.start,
                end: oAppointmentData.end,
                info: oAppointmentData.info || "",
                type: oAppointmentData.type || "Type01",
                icon: oAppointmentData.icon || ""
            });
            
            // Open event details popover
            this.byId("eventDetailsPopover").openBy(oEvent.getParameter("domRef"));
        },
        
        onIntervalSelect: function (oEvent) {
            var oInterval = oEvent.getParameter("interval");
            var oStartDate = oInterval.getStartDate();
            var oEndDate = oInterval.getEndDate();
            
            // Close other popovers
            this.byId("viewPopover").close();
            this.byId("filterPopover").close();
            this.byId("newEventPopover").close();
            
            // Update selected event in model with new interval
            var oViewModel = this.getView().getModel("view");
            oViewModel.setProperty("/selectedEvent", {
                title: "New Event",
                start: oStartDate,
                end: oEndDate,
                info: "",
                type: "Type01",
                icon: ""
            });
            
            // Open event details popover
            this.byId("eventDetailsPopover").openBy(oEvent.getParameter("domRef"));
        },
        
        _openEventDetailsPopoverForNew: function () {
            // Create a new event for the current day
            var oToday = UI5Date.getInstance();
            oToday.setHours(9, 0, 0, 0); // Default to 9 AM
            
            var oEnd = UI5Date.getInstance(oToday);
            oEnd.setHours(10, 0, 0, 0); // Default to 10 AM
            
            // Update selected event in model
            var oViewModel = this.getView().getModel("view");
            oViewModel.setProperty("/selectedEvent", {
                title: "New Event",
                start: oToday,
                end: oEnd,
                info: "",
                type: "Type01",
                icon: ""
            });
            
            // Open event details popover
            this.byId("eventDetailsPopover").openBy(this.byId("calendar"));
        },
        
        // Fragment handling functions
        _openRemarksDialog: function() {
            if (!this._oRemarksDialog) {
                this._oRemarksDialog = sap.ui.xmlfragment(
                    "com.capexrevex.capexravex.view.RemarksDialog",
                    this
                );
                this.getView().addDependent(this._oRemarksDialog);
            }
            
            // Set default values for new event (current date from 4:00 PM to 4:30 PM)
            var oEventDate = UI5Date.getInstance();
            oEventDate.setHours(16, 0, 0, 0); // 4:00 PM
            
            var oEnd = UI5Date.getInstance(oEventDate);
            oEnd.setHours(16, 30, 0, 0); // 4:30 PM
            
            var oViewModel = this.getView().getModel("view");
            oViewModel.setProperty("/selectedEvent", {
                title: "",
                start: oEventDate,
                end: oEnd,
                info: "",
                type: "Type01",
                icon: ""
            });
            
            this._oRemarksDialog.open();
        },
        
        onSaveEventFromDialog: function() {
            var oViewModel = this.getView().getModel("view");
            var oSelectedEvent = oViewModel.getProperty("/selectedEvent");
            
            // Get values from the dialog
            var sTitle = sap.ui.getCore().byId("eventTitle");
            var sAttendees = sap.ui.getCore().byId("eventAttendees")
            var bMakeRecurring = sap.ui.getCore().byId("makeRecurring")
            var bAllDay = sap.ui.getCore().byId("allDay")
            var bInPerson = sap.ui.getCore().byId("inPerson")
            var sResponseOption = sap.ui.getCore().byId("responseOptions")
            var sShowAs = sap.ui.getCore().byId("showAs")
            var sDescription = sap.ui.getCore().byId("eventDescription")
            
            // Validate required fields
            // if (!sTitle) {
            //     MessageToast.show("Please enter a title for the event");
            //     return;
            // }
            
            // Get the date and time values
            var oDatePicker = sap.ui.getCore().byId("eventDate");
            var oStartTimePicker = sap.ui.getCore().byId("startTime");
            var oEndTimePicker = sap.ui.getCore().byId("endTime");
            
            var oDate = oDatePicker.getDateValue();
            var oStartTime = oStartTimePicker.getDateValue();
            var oEndTime = oEndTimePicker.getDateValue();
            
            // Combine date and start time
            var oStart = new Date(oDate);
            oStart.setHours(oStartTime.getHours(), oStartTime.getMinutes(), 0, 0);
            
            var oEnd = new Date(oDate);
            oEnd.setHours(oEndTime.getHours(), oEndTime.getMinutes(), 0, 0);
            
            // Validate that end time is after start time
            if (oEnd <= oStart) {
                MessageToast.show("End time must be after start time");
                return;
            }
            
            // Create the new appointment object
            var newAppointment = {
                start: oStart,
                end: oEnd,
                // title: sTitle,
                info: bInPerson ? "In-person event" : "Online event",
                type: "Type01", // Default type
                attendees: sAttendees,
                description: sDescription,
                recurring: bMakeRecurring,
                allDay: bAllDay,
                responseOption: sResponseOption,
                showAs: sShowAs
            };
            
            // Get the model and add the new appointment to the first person's calendar
            var oModel = this.getView().getModel();
            var aPeople = oModel.getProperty("/people");
            
            if (aPeople && aPeople.length > 0) {
                // Add to the first person's appointments
                aPeople[0].appointments.push(newAppointment);
                
                // Update the model
                oModel.setProperty("/people", aPeople);
                
                // Show success message
                MessageToast.show("Event '" + sTitle + "' has been created and added to your calendar");
                
                // Close the dialog
                if (this._oRemarksDialog) {
                    this._oRemarksDialog.close();
                }
                
                // Refresh the calendar to show the new appointment
                this.byId("calendar").getBinding("rows").refresh(true);
            } else {
                MessageToast.show("Error: Could not find calendar to add event");
            }
        },
        
        onCancelEventFromDialog: function() {
            // Close the dialog without saving
            if (this._oRemarksDialog) {
                this._oRemarksDialog.close();
            }
            MessageToast.show("Event creation cancelled");
        },
        
        onSaveEvent: function () {
            var oViewModel = this.getView().getModel("view");
            var oSelectedEvent = oViewModel.getProperty("/selectedEvent");
            
            // Here you would typically save the event to your backend or model
            // For this example, we'll just show a message
            
            MessageToast.show("Event '" + oSelectedEvent.title + "' saved successfully");
            
            // Close the popover
            this.byId("eventDetailsPopover").close();
            
            // Refresh the calendar to show the new/updated event
            this.byId("calendar").getBinding("rows").refresh();
        },
        
        onDiscardEvent: function () {
            // Close the popover without saving
            this.byId("eventDetailsPopover").close();
            MessageToast.show("Changes discarded");
        },
        
        onExit: function() {
            // Clean up the fragment when the controller is destroyed
            if (this._oRemarksDialog) {
                this._oRemarksDialog.destroy();
                this._oRemarksDialog = null;
            }
        }
    });
});
