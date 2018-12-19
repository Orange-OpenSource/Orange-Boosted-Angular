import { Component, Input } from '@angular/core';
import { NgbDateParserFormatter, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DateParserFormatter } from '../util/date-parser-formater';

@Component({
    selector: 'o-calendar',
    styles: [`
        .calendar-input {
            border-left: none;
        }
        button.calendar-white {
            width: 2.75rem;
            background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjc0IiBoZWlnaHQ9IjI3NCIgdmlld0JveD0iMCAwIDI3NCAyNzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMy40NDE5IDI3My43MjhDMTkuNjE4MSAyNzIuOTc1IDE4LjU3ODUgMjcyLjY5NiAxNi43NTczIDI3MS45MzVDMTAuNTQ3NSAyNjkuMzQxIDQuODEyMDcgMjYzLjYzNyAyLjQyMjE3IDI1Ny42OEMwLjM1OTA5IDI1Mi41MzcgMC41MzA1OCAyNjIuNjcxIDAuNDI0NDkzIDEzOS42MjhMMC4zMjczOTMgMjcuMDA0MkgzMS4xNzA4SDYyLjAxNDJMNjIuMTMwOCAxOC44MDIxQzYyLjI0NjUgMTAuNjYxNyA2Mi4yNTQ5IDEwLjU4MzkgNjMuMjQyNyA4LjQ0NjU1QzY0LjUwMzQgNS43MTg4MiA2Ny4yMzQyIDMuMDAxNzkgNzAuMDA4NSAxLjcxNTExQzcxLjgzMTUgMC44Njk2NiA3Mi41NjU4IDAuNzMzODMgNzUuMzAwMiAwLjczNjU2OEM3OC4wMjQgMC43MzkzOSA3OC43ODEyIDAuODc5ODkxIDgwLjYyODggMS43MjYyOEM4My4zNTE2IDIuOTczNjcgODYuMDY1NSA1LjY5NTU4IDg3LjM2NTcgOC40ODMzNUM4OC4zNDQyIDEwLjU4MTIgODguMzU0IDEwLjY3MjcgODguNDY5NiAxOC44MDIxTDg4LjU4NjIgMjcuMDA0MkgxMzcuMDM2SDE4NS40ODZMMTg1LjYwMyAxOC44MDIxQzE4NS43MTkgMTAuNjYxNyAxODUuNzI3IDEwLjU4MzkgMTg2LjcxNSA4LjQ0NjU1QzE4Ny45NzYgNS43MTg4MiAxOTAuNzA2IDMuMDAxNzkgMTkzLjQ4MSAxLjcxNTExQzE5NS4zMDEgMC44NzA5MDEgMTk2LjA0MiAwLjczMzM5OCAxOTguNzcyIDAuNzMzMzk4QzIwMS40ODcgMC43MzMzOTggMjAyLjI0NiAwLjg3MjUyIDIwNC4wMDYgMS42OTIzOEMyMDYuNzUyIDIuOTcxNTUgMjA4LjUzMSA0LjQyOTIgMjA5LjgxOCA2LjQ1NTk4QzIxMS43MTUgOS40NDQ1NCAyMTIuMDAyIDExLjE1MDIgMjEyLjAwMiAxOS40NjQ4VjI2Ljk2NjdMMjMyLjAyMiAyNy4wOTUzQzI1My40MzUgMjcuMjMyNyAyNTIuNjkxIDI3LjE3NDUgMjU3LjQ0NSAyOS4wODJDMjYzLjM1NSAzMS40NTM0IDI2OS4yODYgMzcuMzc3OCAyNzEuNjUgNDMuMjcyOUMyNzMuNzE0IDQ4LjQxNTcgMjczLjU0MiAzOC4yODE4IDI3My42NDggMTYxLjMyNEwyNzMuNzQ1IDI3My45NDlMMTQ4Ljk0NiAyNzMuOTA4QzgwLjMwNjkgMjczLjg4NSAyMy44Mjk5IDI3My44MDQgMjMuNDQxOSAyNzMuNzI4VjI3My43MjhaTTI1Ni4wMTQgMTg2LjM3MkwyNTUuOTIyIDExNi40MzNMMjU0LjgzMSAxMTQuMTRDMjUzLjQ0MyAxMTEuMjI2IDI1MS4yNTIgMTA5LjAzNSAyNDguMzM4IDEwNy42NDdMMjQ2LjA0NSAxMDYuNTU2TDEzMi4wMDYgMTA2LjQ2NUwxNy45NjY5IDEwNi4zNzVMMTguMDU4NiAxNzYuMzE1TDE4LjE1MDIgMjQ2LjI1NkwxOS4yNDE5IDI0OC41NDlDMjAuOTU4MiAyNTIuMTU0IDIzLjc3MDYgMjU0LjU3NyAyNy42NzUyIDI1NS44MTVDMjguODAyMiAyNTYuMTczIDUxLjk0MTMgMjU2LjI2NyAxNDIuNTk2IDI1Ni4yODZMMjU2LjEwNiAyNTYuMzFMMjU2LjAxNCAxODYuMzcyVjE4Ni4zNzJaTTgwLjU1MzMgNzkuMjI1MkM4NC41NzkgNzguMTk1NiA4Ny45MzUxIDc2LjI5MjggOTAuODI3OSA3My40Qzk5LjM4MDcgNjQuODQ3MiA5OS40NjI4IDUxLjA2MDggOTEuMDExNiA0Mi41NTQ0TDg4LjcwNTggNDAuMjMzNEw4OC41Mjk0IDUwLjY0MDNMODguMzUzIDYxLjA0NzJMODcuMzY1NyA2My4xNjM5Qzg2LjA2NTUgNjUuOTUxNiA4My4zNTE2IDY4LjY3MzYgODAuNjI4OCA2OS45MjFDNzguNzc4NSA3MC43Njg2IDc4LjAyODEgNzAuOTA3NyA3NS4zMDAyIDcwLjkwNzdDNzIuNTcyMyA3MC45MDc3IDcxLjgyMTkgNzAuNzY4NiA2OS45NzE2IDY5LjkyMUM2Ny4yNDg4IDY4LjY3MzYgNjQuNTM0OSA2NS45NTE2IDYzLjIzNDcgNjMuMTYzOUw2Mi4yNDc0IDYxLjA0NzJMNjIuMDcxIDUwLjY0MDNMNjEuODk0NiA0MC4yMzM0TDU5LjU4ODggNDIuNTU0NEM1MS4xMzc2IDUxLjA2MDggNTEuMjE5NyA2NC44NDcyIDU5Ljc3MjUgNzMuNEM2NS4yNzQyIDc4LjkwMTggNzMuMTY3IDgxLjExNDMgODAuNTUzMyA3OS4yMjUyVjc5LjIyNTJaTTIwNC4wMjUgNzkuMjI1MkMyMTUuODgyIDc2LjE5MjkgMjIzLjEwMiA2NC4yNTc3IDIyMC4xMjQgNTIuNjE0NUMyMTkuMTU4IDQ4LjgzODYgMjE3LjU0MiA0NS45Nzg3IDIxNC42NDcgNDIuOTIzMUwyMTIuMTc4IDQwLjMxNjZMMjEyLjAwMiA1MC42ODE5TDIxMS44MjUgNjEuMDQ3MkwyMTAuODM4IDYzLjE2MzlDMjA5LjUzOCA2NS45NTE2IDIwNi44MjQgNjguNjczNiAyMDQuMTAxIDY5LjkyMUMyMDIuMjUxIDcwLjc2ODYgMjAxLjUgNzAuOTA3NyAxOTguNzcyIDcwLjkwNzdDMTk2LjA0NSA3MC45MDc3IDE5NS4yOTQgNzAuNzY4NiAxOTMuNDQ0IDY5LjkyMUMxOTAuNzIxIDY4LjY3MzYgMTg4LjAwNyA2NS45NTE2IDE4Ni43MDcgNjMuMTYzOUwxODUuNzIgNjEuMDQ3MkwxODUuNTQzIDUwLjY0MDNMMTg1LjM2NyA0MC4yMzM0TDE4My4wNjEgNDIuNTU0NEMxNzQuNjEgNTEuMDYwOCAxNzQuNjkyIDY0Ljg0NzIgMTgzLjI0NSA3My40QzE4OC43NDYgNzguOTAxOCAxOTYuNjM5IDgxLjExNDMgMjA0LjAyNSA3OS4yMjUyVjc5LjIyNTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K') !important;
            background-repeat: no-repeat;
            background-size: 23px;
            background-position: center;
            border-right: none;
            border-color: #ccc;
        }
        button.calendar-black {
            width: 2.75rem;
            background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjc0IiBoZWlnaHQ9IjI3NCIgdmlld0JveD0iMCAwIDI3NCAyNzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMy40NDE5IDI3Mi45OTVDMTkuNjE4MSAyNzIuMjQyIDE4LjU3ODUgMjcxLjk2MyAxNi43NTczIDI3MS4yMDJDMTAuNTQ3NSAyNjguNjA4IDQuODEyMDcgMjYyLjkwNCAyLjQyMjE3IDI1Ni45NDdDMC4zNTkwOSAyNTEuODA0IDAuNTMwNTggMjYxLjkzOCAwLjQyNDQ5MyAxMzguODk1TDAuMzI3MzkzIDI2LjI3MDlIMzEuMTcwOEg2Mi4wMTQyTDYyLjEzMDggMTguMDY4OEM2Mi4yNDY1IDkuOTI4NDEgNjIuMjU0OSA5Ljg1MDQ0IDYzLjI0MjcgNy43MTMwOUM2NC41MDM0IDQuOTg1MzUgNjcuMjM0MyAyLjI2ODM2IDcwLjAwODUgMC45ODE2OEM3MS44MzE1IDAuMTM2MjI3IDcyLjU2NTggMC4wMDAzOTc0ODEgNzUuMzAwMiAwLjAwMzEzNTA0Qzc4LjAyNCAwLjAwNTk1NzI2IDc4Ljc4MTIgMC4xNDY1MjcgODAuNjI4OCAwLjk5MjkxMUM4My4zNTE3IDIuMjQwMzEgODYuMDY1NSA0Ljk2MjI2IDg3LjM2NTcgNy43NTAwMkM4OC4zNDQyIDkuODQ3OTIgODguMzU0IDkuOTM5MzYgODguNDY5NiAxOC4wNjg4TDg4LjU4NjIgMjYuMjcwOUgxMzcuMDM2SDE4NS40ODZMMTg1LjYwMyAxOC4wNjg4QzE4NS43MTkgOS45Mjg0MSAxODUuNzI3IDkuODUwNDQgMTg2LjcxNSA3LjcxMzA5QzE4Ny45NzYgNC45ODUzNSAxOTAuNzA2IDIuMjY4MzYgMTkzLjQ4MSAwLjk4MTY4QzE5NS4zMDEgMC4xMzc0NjkgMTk2LjA0MiAwIDE5OC43NzIgMEMyMDEuNDg3IDAgMjAyLjI0NiAwLjEzOTA4NyAyMDQuMDA2IDAuOTU4OTQyQzIwNi43NTIgMi4yMzgxMSAyMDguNTMxIDMuNjk1OCAyMDkuODE4IDUuNzIyNThDMjExLjcxNSA4LjcxMTE0IDIxMi4wMDIgMTAuNDE2OCAyMTIuMDAyIDE4LjczMTRWMjYuMjMzNEwyMzIuMDIyIDI2LjM2MThDMjUzLjQzNSAyNi40OTkzIDI1Mi42OTEgMjYuNDQxMSAyNTcuNDQ1IDI4LjM0ODZDMjYzLjM1NSAzMC43MiAyNjkuMjg2IDM2LjY0NDQgMjcxLjY1IDQyLjUzOTZDMjczLjcxNCA0Ny42ODI0IDI3My41NDIgMzcuNTQ4NSAyNzMuNjQ4IDE2MC41OTFMMjczLjc0NSAyNzMuMjE1TDE0OC45NDYgMjczLjE3NEM4MC4zMDY5IDI3My4xNTIgMjMuODI5OSAyNzMuMDcxIDIzLjQ0MTkgMjcyLjk5NVYyNzIuOTk1Wk0yNTYuMDE0IDE4NS42MzhMMjU1LjkyMiAxMTUuN0wyNTQuODMxIDExMy40MDdDMjUzLjQ0MyAxMTAuNDkzIDI1MS4yNTIgMTA4LjMwMSAyNDguMzM4IDEwNi45MTRMMjQ2LjA0NSAxMDUuODIyTDEzMi4wMDYgMTA1LjczMkwxNy45NjY5IDEwNS42NDJMMTguMDU4NiAxNzUuNTgyTDE4LjE1MDIgMjQ1LjUyMkwxOS4yNDE5IDI0Ny44MTVDMjAuOTU4MiAyNTEuNDIgMjMuNzcwNiAyNTMuODQ0IDI3LjY3NTIgMjU1LjA4MkMyOC44MDIyIDI1NS40MzkgNTEuOTQxMyAyNTUuNTM0IDE0Mi41OTYgMjU1LjU1M0wyNTYuMTA2IDI1NS41NzZMMjU2LjAxNCAxODUuNjM4VjE4NS42MzhaTTgwLjU1MzMgNzguNDkxOEM4NC41NzkgNzcuNDYyMiA4Ny45MzUxIDc1LjU1OTUgOTAuODI3OSA3Mi42NjY2Qzk5LjM4MDcgNjQuMTEzOSA5OS40NjI4IDUwLjMyNzQgOTEuMDExNiA0MS44MjA5TDg4LjcwNTggMzkuNUw4OC41Mjk0IDQ5LjkwN0w4OC4zNTMgNjAuMzEzOUw4Ny4zNjU3IDYyLjQzMDZDODYuMDY1NSA2NS4yMTgzIDgzLjM1MTcgNjcuOTQwMyA4MC42Mjg4IDY5LjE4NzdDNzguNzc4NSA3MC4wMzUzIDc4LjAyODEgNzAuMTc0MyA3NS4zMDAyIDcwLjE3NDNDNzIuNTcyMyA3MC4xNzQzIDcxLjgyMTkgNzAuMDM1MyA2OS45NzE2IDY5LjE4NzdDNjcuMjQ4OCA2Ny45NDAzIDY0LjUzNDkgNjUuMjE4MyA2My4yMzQ3IDYyLjQzMDZMNjIuMjQ3NCA2MC4zMTM5TDYyLjA3MSA0OS45MDdMNjEuODk0NiAzOS41TDU5LjU4ODggNDEuODIwOUM1MS4xMzc2IDUwLjMyNzQgNTEuMjE5NyA2NC4xMTM5IDU5Ljc3MjUgNzIuNjY2NkM2NS4yNzQyIDc4LjE2ODUgNzMuMTY3IDgwLjM4MDkgODAuNTUzMyA3OC40OTE4Vjc4LjQ5MThaTTIwNC4wMjUgNzguNDkxOEMyMTUuODgyIDc1LjQ1OTUgMjIzLjEwMiA2My41MjQzIDIyMC4xMjQgNTEuODgxMUMyMTkuMTU4IDQ4LjEwNTIgMjE3LjU0MiA0NS4yNDUzIDIxNC42NDcgNDIuMTg5N0wyMTIuMTc4IDM5LjU4MzFMMjEyLjAwMiA0OS45NDg1TDIxMS44MjUgNjAuMzEzOUwyMTAuODM4IDYyLjQzMDZDMjA5LjUzOCA2NS4yMTgzIDIwNi44MjQgNjcuOTQwMyAyMDQuMTAxIDY5LjE4NzdDMjAyLjI1MSA3MC4wMzUzIDIwMS41IDcwLjE3NDMgMTk4Ljc3MiA3MC4xNzQzQzE5Ni4wNDUgNzAuMTc0MyAxOTUuMjk0IDcwLjAzNTMgMTkzLjQ0NCA2OS4xODc3QzE5MC43MjEgNjcuOTQwMyAxODguMDA3IDY1LjIxODMgMTg2LjcwNyA2Mi40MzA2TDE4NS43MiA2MC4zMTM5TDE4NS41NDMgNDkuOTA3TDE4NS4zNjcgMzkuNUwxODMuMDYxIDQxLjgyMDlDMTc0LjYxIDUwLjMyNzQgMTc0LjY5MiA2NC4xMTM5IDE4My4yNDUgNzIuNjY2NkMxODguNzQ2IDc4LjE2ODUgMTk2LjYzOSA4MC4zODA5IDIwNC4wMjUgNzguNDkxOFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=') !important;
            background-repeat: no-repeat;
            background-size: 23px;
            background-position: center;
            border-right: none;
            border-color: #ccc;
        }
        button.calendar-white:active, button.calendar-black:active {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjc0IiBoZWlnaHQ9IjI3NCIgdmlld0JveD0iMCAwIDI3NCAyNzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMy40NDE5IDI3Mi45OTVDMTkuNjE4MSAyNzIuMjQyIDE4LjU3ODUgMjcxLjk2MyAxNi43NTczIDI3MS4yMDJDMTAuNTQ3NSAyNjguNjA4IDQuODEyMDcgMjYyLjkwNCAyLjQyMjE3IDI1Ni45NDdDMC4zNTkwOSAyNTEuODA0IDAuNTMwNTggMjYxLjkzOCAwLjQyNDQ5MyAxMzguODk1TDAuMzI3MzkzIDI2LjI3MDlIMzEuMTcwOEg2Mi4wMTQyTDYyLjEzMDggMTguMDY4OEM2Mi4yNDY1IDkuOTI4NDEgNjIuMjU0OSA5Ljg1MDQ0IDYzLjI0MjcgNy43MTMwOUM2NC41MDM0IDQuOTg1MzUgNjcuMjM0MyAyLjI2ODM2IDcwLjAwODUgMC45ODE2OEM3MS44MzE1IDAuMTM2MjI3IDcyLjU2NTggMC4wMDAzOTc0ODEgNzUuMzAwMiAwLjAwMzEzNTA0Qzc4LjAyNCAwLjAwNTk1NzI2IDc4Ljc4MTIgMC4xNDY1MjcgODAuNjI4OCAwLjk5MjkxMUM4My4zNTE3IDIuMjQwMzEgODYuMDY1NSA0Ljk2MjI2IDg3LjM2NTcgNy43NTAwMkM4OC4zNDQyIDkuODQ3OTIgODguMzU0IDkuOTM5MzYgODguNDY5NiAxOC4wNjg4TDg4LjU4NjIgMjYuMjcwOUgxMzcuMDM2SDE4NS40ODZMMTg1LjYwMyAxOC4wNjg4QzE4NS43MTkgOS45Mjg0MSAxODUuNzI3IDkuODUwNDQgMTg2LjcxNSA3LjcxMzA5QzE4Ny45NzYgNC45ODUzNSAxOTAuNzA2IDIuMjY4MzYgMTkzLjQ4MSAwLjk4MTY4QzE5NS4zMDEgMC4xMzc0NjkgMTk2LjA0MiAwIDE5OC43NzIgMEMyMDEuNDg3IDAgMjAyLjI0NiAwLjEzOTA4NyAyMDQuMDA2IDAuOTU4OTQyQzIwNi43NTIgMi4yMzgxMSAyMDguNTMxIDMuNjk1OCAyMDkuODE4IDUuNzIyNThDMjExLjcxNSA4LjcxMTE0IDIxMi4wMDIgMTAuNDE2OCAyMTIuMDAyIDE4LjczMTRWMjYuMjMzNEwyMzIuMDIyIDI2LjM2MThDMjUzLjQzNSAyNi40OTkzIDI1Mi42OTEgMjYuNDQxMSAyNTcuNDQ1IDI4LjM0ODZDMjYzLjM1NSAzMC43MiAyNjkuMjg2IDM2LjY0NDQgMjcxLjY1IDQyLjUzOTZDMjczLjcxNCA0Ny42ODI0IDI3My41NDIgMzcuNTQ4NSAyNzMuNjQ4IDE2MC41OTFMMjczLjc0NSAyNzMuMjE1TDE0OC45NDYgMjczLjE3NEM4MC4zMDY5IDI3My4xNTIgMjMuODI5OSAyNzMuMDcxIDIzLjQ0MTkgMjcyLjk5NVYyNzIuOTk1Wk0yNTYuMDE0IDE4NS42MzhMMjU1LjkyMiAxMTUuN0wyNTQuODMxIDExMy40MDdDMjUzLjQ0MyAxMTAuNDkzIDI1MS4yNTIgMTA4LjMwMSAyNDguMzM4IDEwNi45MTRMMjQ2LjA0NSAxMDUuODIyTDEzMi4wMDYgMTA1LjczMkwxNy45NjY5IDEwNS42NDJMMTguMDU4NiAxNzUuNTgyTDE4LjE1MDIgMjQ1LjUyMkwxOS4yNDE5IDI0Ny44MTVDMjAuOTU4MiAyNTEuNDIgMjMuNzcwNiAyNTMuODQ0IDI3LjY3NTIgMjU1LjA4MkMyOC44MDIyIDI1NS40MzkgNTEuOTQxMyAyNTUuNTM0IDE0Mi41OTYgMjU1LjU1M0wyNTYuMTA2IDI1NS41NzZMMjU2LjAxNCAxODUuNjM4VjE4NS42MzhaTTgwLjU1MzMgNzguNDkxOEM4NC41NzkgNzcuNDYyMiA4Ny45MzUxIDc1LjU1OTUgOTAuODI3OSA3Mi42NjY2Qzk5LjM4MDcgNjQuMTEzOSA5OS40NjI4IDUwLjMyNzQgOTEuMDExNiA0MS44MjA5TDg4LjcwNTggMzkuNUw4OC41Mjk0IDQ5LjkwN0w4OC4zNTMgNjAuMzEzOUw4Ny4zNjU3IDYyLjQzMDZDODYuMDY1NSA2NS4yMTgzIDgzLjM1MTcgNjcuOTQwMyA4MC42Mjg4IDY5LjE4NzdDNzguNzc4NSA3MC4wMzUzIDc4LjAyODEgNzAuMTc0MyA3NS4zMDAyIDcwLjE3NDNDNzIuNTcyMyA3MC4xNzQzIDcxLjgyMTkgNzAuMDM1MyA2OS45NzE2IDY5LjE4NzdDNjcuMjQ4OCA2Ny45NDAzIDY0LjUzNDkgNjUuMjE4MyA2My4yMzQ3IDYyLjQzMDZMNjIuMjQ3NCA2MC4zMTM5TDYyLjA3MSA0OS45MDdMNjEuODk0NiAzOS41TDU5LjU4ODggNDEuODIwOUM1MS4xMzc2IDUwLjMyNzQgNTEuMjE5NyA2NC4xMTM5IDU5Ljc3MjUgNzIuNjY2NkM2NS4yNzQyIDc4LjE2ODUgNzMuMTY3IDgwLjM4MDkgODAuNTUzMyA3OC40OTE4Vjc4LjQ5MThaTTIwNC4wMjUgNzguNDkxOEMyMTUuODgyIDc1LjQ1OTUgMjIzLjEwMiA2My41MjQzIDIyMC4xMjQgNTEuODgxMUMyMTkuMTU4IDQ4LjEwNTIgMjE3LjU0MiA0NS4yNDUzIDIxNC42NDcgNDIuMTg5N0wyMTIuMTc4IDM5LjU4MzFMMjEyLjAwMiA0OS45NDg1TDIxMS44MjUgNjAuMzEzOUwyMTAuODM4IDYyLjQzMDZDMjA5LjUzOCA2NS4yMTgzIDIwNi44MjQgNjcuOTQwMyAyMDQuMTAxIDY5LjE4NzdDMjAyLjI1MSA3MC4wMzUzIDIwMS41IDcwLjE3NDMgMTk4Ljc3MiA3MC4xNzQzQzE5Ni4wNDUgNzAuMTc0MyAxOTUuMjk0IDcwLjAzNTMgMTkzLjQ0NCA2OS4xODc3QzE5MC43MjEgNjcuOTQwMyAxODguMDA3IDY1LjIxODMgMTg2LjcwNyA2Mi40MzA2TDE4NS43MiA2MC4zMTM5TDE4NS41NDMgNDkuOTA3TDE4NS4zNjcgMzkuNUwxODMuMDYxIDQxLjgyMDlDMTc0LjYxIDUwLjMyNzQgMTc0LjY5MiA2NC4xMTM5IDE4My4yNDUgNzIuNjY2NkMxODguNzQ2IDc4LjE2ODUgMTk2LjYzOSA4MC4zODA5IDIwNC4wMjUgNzguNDkxOFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=') !important;
        }
        button.calendar-white:hover, button.calendar-black:hover {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjc0IiBoZWlnaHQ9IjI3NCIgdmlld0JveD0iMCAwIDI3NCAyNzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMy40NDE5IDI3My42ODNDMTkuNjE4MSAyNzIuOTMgMTguNTc4NSAyNzIuNjUyIDE2Ljc1NzMgMjcxLjg5MUMxMC41NDc1IDI2OS4yOTcgNC44MTIwNyAyNjMuNTkzIDIuNDIyMTcgMjU3LjYzNUMwLjM1OTA5IDI1Mi40OTMgMC41MzA1OCAyNjIuNjI3IDAuNDI0NDkzIDEzOS41ODRMMC4zMjczOTMgMjYuOTU5OEgzMS4xNzA4SDYyLjAxNDJMNjIuMTMwOCAxOC43NTc3QzYyLjI0NjUgMTAuNjE3MyA2Mi4yNTQ5IDEwLjUzOTQgNjMuMjQyNyA4LjQwMjAyQzY0LjUwMzQgNS42NzQyOSA2Ny4yMzQyIDIuOTU3MjYgNzAuMDA4NSAxLjY3MDU4QzcxLjgzMTUgMC44MjUxMjcgNzIuNTY1OCAwLjY4OTM2NiA3NS4zMDAyIDAuNjkyMTA0Qzc4LjAyNCAwLjY5NDkyNiA3OC43ODEyIDAuODM1NDI2IDgwLjYyODggMS42ODE4MUM4My4zNTE2IDIuOTI5MiA4Ni4wNjU1IDUuNjUxMTkgODcuMzY1NyA4LjQzODk1Qzg4LjM0NDIgMTAuNTM2OSA4OC4zNTQgMTAuNjI4MyA4OC40Njk2IDE4Ljc1NzdMODguNTg2MiAyNi45NTk4SDEzNy4wMzZIMTg1LjQ4NkwxODUuNjAzIDE4Ljc1NzdDMTg1LjcxOSAxMC42MTczIDE4NS43MjcgMTAuNTM5NCAxODYuNzE1IDguNDAyMDJDMTg3Ljk3NiA1LjY3NDI5IDE5MC43MDYgMi45NTcyNiAxOTMuNDgxIDEuNjcwNThDMTk1LjMwMSAwLjgyNjM2OCAxOTYuMDQyIDAuNjg4OTM0IDE5OC43NzIgMC42ODg5MzRDMjAxLjQ4NyAwLjY4ODkzNCAyMDIuMjQ2IDAuODI3OTg3IDIwNC4wMDYgMS42NDc4NEMyMDYuNzUyIDIuOTI3MDEgMjA4LjUzMSA0LjM4NDczIDIwOS44MTggNi40MTE1MUMyMTEuNzE1IDkuNDAwMDggMjEyLjAwMiAxMS4xMDU3IDIxMi4wMDIgMTkuNDIwM1YyNi45MjIzTDIzMi4wMjIgMjcuMDUwN0MyNTMuNDM1IDI3LjE4ODIgMjUyLjY5MSAyNy4xMyAyNTcuNDQ1IDI5LjAzNzVDMjYzLjM1NSAzMS40MDkgMjY5LjI4NiAzNy4zMzM0IDI3MS42NSA0My4yMjg1QzI3My43MTQgNDguMzcxMyAyNzMuNTQyIDM4LjIzNzQgMjczLjY0OCAxNjEuMjhMMjczLjc0NSAyNzMuOTA0TDE0OC45NDYgMjczLjg2M0M4MC4zMDY5IDI3My44NDEgMjMuODI5OSAyNzMuNzYgMjMuNDQxOSAyNzMuNjgzVjI3My42ODNaTTI1Ni4wMTQgMTg2LjMyN0wyNTUuOTIyIDExNi4zODlMMjU0LjgzMSAxMTQuMDk2QzI1My40NDMgMTExLjE4MiAyNTEuMjUyIDEwOC45OSAyNDguMzM4IDEwNy42MDNMMjQ2LjA0NSAxMDYuNTExTDEzMi4wMDYgMTA2LjQyMUwxNy45NjY5IDEwNi4zMzFMMTguMDU4NiAxNzYuMjcxTDE4LjE1MDIgMjQ2LjIxMUwxOS4yNDE5IDI0OC41MDRDMjAuOTU4MiAyNTIuMTA5IDIzLjc3MDYgMjU0LjUzMyAyNy42NzUyIDI1NS43NzFDMjguODAyMiAyNTYuMTI4IDUxLjk0MTMgMjU2LjIyMyAxNDIuNTk2IDI1Ni4yNDJMMjU2LjEwNiAyNTYuMjY1TDI1Ni4wMTQgMTg2LjMyN1YxODYuMzI3Wk04MC41NTMzIDc5LjE4MDhDODQuNTc5IDc4LjE1MTIgODcuOTM1MSA3Ni4yNDg0IDkwLjgyNzkgNzMuMzU1NkM5OS4zODA3IDY0LjgwMjggOTkuNDYyOCA1MS4wMTYzIDkxLjAxMTYgNDIuNTA5OUw4OC43MDU4IDQwLjE4OUw4OC41Mjk0IDUwLjU5NTlMODguMzUzIDYxLjAwMjhMODcuMzY1NyA2My4xMTk1Qzg2LjA2NTUgNjUuOTA3MiA4My4zNTE2IDY4LjYyOTIgODAuNjI4OCA2OS44NzY2Qzc4Ljc3ODUgNzAuNzI0MiA3OC4wMjgxIDcwLjg2MzIgNzUuMzAwMiA3MC44NjMyQzcyLjU3MjMgNzAuODYzMiA3MS44MjE5IDcwLjcyNDIgNjkuOTcxNiA2OS44NzY2QzY3LjI0ODggNjguNjI5MiA2NC41MzQ5IDY1LjkwNzIgNjMuMjM0NyA2My4xMTk1TDYyLjI0NzQgNjEuMDAyOEw2Mi4wNzEgNTAuNTk1OUw2MS44OTQ2IDQwLjE4OUw1OS41ODg4IDQyLjUwOTlDNTEuMTM3NiA1MS4wMTYzIDUxLjIxOTcgNjQuODAyOCA1OS43NzI1IDczLjM1NTZDNjUuMjc0MiA3OC44NTc0IDczLjE2NyA4MS4wNjk4IDgwLjU1MzMgNzkuMTgwOFY3OS4xODA4Wk0yMDQuMDI1IDc5LjE4MDhDMjE1Ljg4MiA3Ni4xNDg1IDIyMy4xMDIgNjQuMjEzMiAyMjAuMTI0IDUyLjU3QzIxOS4xNTggNDguNzk0MSAyMTcuNTQyIDQ1LjkzNDIgMjE0LjY0NyA0Mi44Nzg3TDIxMi4xNzggNDAuMjcyMUwyMTIuMDAyIDUwLjYzNzRMMjExLjgyNSA2MS4wMDI4TDIxMC44MzggNjMuMTE5NUMyMDkuNTM4IDY1LjkwNzIgMjA2LjgyNCA2OC42MjkyIDIwNC4xMDEgNjkuODc2NkMyMDIuMjUxIDcwLjcyNDIgMjAxLjUgNzAuODYzMiAxOTguNzcyIDcwLjg2MzJDMTk2LjA0NSA3MC44NjMyIDE5NS4yOTQgNzAuNzI0MiAxOTMuNDQ0IDY5Ljg3NjZDMTkwLjcyMSA2OC42MjkyIDE4OC4wMDcgNjUuOTA3MiAxODYuNzA3IDYzLjExOTVMMTg1LjcyIDYxLjAwMjhMMTg1LjU0MyA1MC41OTU5TDE4NS4zNjcgNDAuMTg5TDE4My4wNjEgNDIuNTA5OUMxNzQuNjEgNTEuMDE2MyAxNzQuNjkyIDY0LjgwMjggMTgzLjI0NSA3My4zNTU2QzE4OC43NDYgNzguODU3NCAxOTYuNjM5IDgxLjA2OTggMjA0LjAyNSA3OS4xODA4WiIgZmlsbD0iI0YxNkUwMCIvPgo8L3N2Zz4K') !important;
        }
        button.calendar-white:focus, button.calendar-black:focus {
            background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjc0IiBoZWlnaHQ9IjI3NCIgdmlld0JveD0iMCAwIDI3NCAyNzQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMy40NDE5IDI3My43MjhDMTkuNjE4MSAyNzIuOTc1IDE4LjU3ODUgMjcyLjY5NiAxNi43NTczIDI3MS45MzVDMTAuNTQ3NSAyNjkuMzQxIDQuODEyMDcgMjYzLjYzNyAyLjQyMjE3IDI1Ny42OEMwLjM1OTA5IDI1Mi41MzcgMC41MzA1OCAyNjIuNjcxIDAuNDI0NDkzIDEzOS42MjhMMC4zMjczOTMgMjcuMDA0MkgzMS4xNzA4SDYyLjAxNDJMNjIuMTMwOCAxOC44MDIxQzYyLjI0NjUgMTAuNjYxNyA2Mi4yNTQ5IDEwLjU4MzkgNjMuMjQyNyA4LjQ0NjU1QzY0LjUwMzQgNS43MTg4MiA2Ny4yMzQyIDMuMDAxNzkgNzAuMDA4NSAxLjcxNTExQzcxLjgzMTUgMC44Njk2NiA3Mi41NjU4IDAuNzMzODMgNzUuMzAwMiAwLjczNjU2OEM3OC4wMjQgMC43MzkzOSA3OC43ODEyIDAuODc5ODkxIDgwLjYyODggMS43MjYyOEM4My4zNTE2IDIuOTczNjcgODYuMDY1NSA1LjY5NTU4IDg3LjM2NTcgOC40ODMzNUM4OC4zNDQyIDEwLjU4MTIgODguMzU0IDEwLjY3MjcgODguNDY5NiAxOC44MDIxTDg4LjU4NjIgMjcuMDA0MkgxMzcuMDM2SDE4NS40ODZMMTg1LjYwMyAxOC44MDIxQzE4NS43MTkgMTAuNjYxNyAxODUuNzI3IDEwLjU4MzkgMTg2LjcxNSA4LjQ0NjU1QzE4Ny45NzYgNS43MTg4MiAxOTAuNzA2IDMuMDAxNzkgMTkzLjQ4MSAxLjcxNTExQzE5NS4zMDEgMC44NzA5MDEgMTk2LjA0MiAwLjczMzM5OCAxOTguNzcyIDAuNzMzMzk4QzIwMS40ODcgMC43MzMzOTggMjAyLjI0NiAwLjg3MjUyIDIwNC4wMDYgMS42OTIzOEMyMDYuNzUyIDIuOTcxNTUgMjA4LjUzMSA0LjQyOTIgMjA5LjgxOCA2LjQ1NTk4QzIxMS43MTUgOS40NDQ1NCAyMTIuMDAyIDExLjE1MDIgMjEyLjAwMiAxOS40NjQ4VjI2Ljk2NjdMMjMyLjAyMiAyNy4wOTUzQzI1My40MzUgMjcuMjMyNyAyNTIuNjkxIDI3LjE3NDUgMjU3LjQ0NSAyOS4wODJDMjYzLjM1NSAzMS40NTM0IDI2OS4yODYgMzcuMzc3OCAyNzEuNjUgNDMuMjcyOUMyNzMuNzE0IDQ4LjQxNTcgMjczLjU0MiAzOC4yODE4IDI3My42NDggMTYxLjMyNEwyNzMuNzQ1IDI3My45NDlMMTQ4Ljk0NiAyNzMuOTA4QzgwLjMwNjkgMjczLjg4NSAyMy44Mjk5IDI3My44MDQgMjMuNDQxOSAyNzMuNzI4VjI3My43MjhaTTI1Ni4wMTQgMTg2LjM3MkwyNTUuOTIyIDExNi40MzNMMjU0LjgzMSAxMTQuMTRDMjUzLjQ0MyAxMTEuMjI2IDI1MS4yNTIgMTA5LjAzNSAyNDguMzM4IDEwNy42NDdMMjQ2LjA0NSAxMDYuNTU2TDEzMi4wMDYgMTA2LjQ2NUwxNy45NjY5IDEwNi4zNzVMMTguMDU4NiAxNzYuMzE1TDE4LjE1MDIgMjQ2LjI1NkwxOS4yNDE5IDI0OC41NDlDMjAuOTU4MiAyNTIuMTU0IDIzLjc3MDYgMjU0LjU3NyAyNy42NzUyIDI1NS44MTVDMjguODAyMiAyNTYuMTczIDUxLjk0MTMgMjU2LjI2NyAxNDIuNTk2IDI1Ni4yODZMMjU2LjEwNiAyNTYuMzFMMjU2LjAxNCAxODYuMzcyVjE4Ni4zNzJaTTgwLjU1MzMgNzkuMjI1MkM4NC41NzkgNzguMTk1NiA4Ny45MzUxIDc2LjI5MjggOTAuODI3OSA3My40Qzk5LjM4MDcgNjQuODQ3MiA5OS40NjI4IDUxLjA2MDggOTEuMDExNiA0Mi41NTQ0TDg4LjcwNTggNDAuMjMzNEw4OC41Mjk0IDUwLjY0MDNMODguMzUzIDYxLjA0NzJMODcuMzY1NyA2My4xNjM5Qzg2LjA2NTUgNjUuOTUxNiA4My4zNTE2IDY4LjY3MzYgODAuNjI4OCA2OS45MjFDNzguNzc4NSA3MC43Njg2IDc4LjAyODEgNzAuOTA3NyA3NS4zMDAyIDcwLjkwNzdDNzIuNTcyMyA3MC45MDc3IDcxLjgyMTkgNzAuNzY4NiA2OS45NzE2IDY5LjkyMUM2Ny4yNDg4IDY4LjY3MzYgNjQuNTM0OSA2NS45NTE2IDYzLjIzNDcgNjMuMTYzOUw2Mi4yNDc0IDYxLjA0NzJMNjIuMDcxIDUwLjY0MDNMNjEuODk0NiA0MC4yMzM0TDU5LjU4ODggNDIuNTU0NEM1MS4xMzc2IDUxLjA2MDggNTEuMjE5NyA2NC44NDcyIDU5Ljc3MjUgNzMuNEM2NS4yNzQyIDc4LjkwMTggNzMuMTY3IDgxLjExNDMgODAuNTUzMyA3OS4yMjUyVjc5LjIyNTJaTTIwNC4wMjUgNzkuMjI1MkMyMTUuODgyIDc2LjE5MjkgMjIzLjEwMiA2NC4yNTc3IDIyMC4xMjQgNTIuNjE0NUMyMTkuMTU4IDQ4LjgzODYgMjE3LjU0MiA0NS45Nzg3IDIxNC42NDcgNDIuOTIzMUwyMTIuMTc4IDQwLjMxNjZMMjEyLjAwMiA1MC42ODE5TDIxMS44MjUgNjEuMDQ3MkwyMTAuODM4IDYzLjE2MzlDMjA5LjUzOCA2NS45NTE2IDIwNi44MjQgNjguNjczNiAyMDQuMTAxIDY5LjkyMUMyMDIuMjUxIDcwLjc2ODYgMjAxLjUgNzAuOTA3NyAxOTguNzcyIDcwLjkwNzdDMTk2LjA0NSA3MC45MDc3IDE5NS4yOTQgNzAuNzY4NiAxOTMuNDQ0IDY5LjkyMUMxOTAuNzIxIDY4LjY3MzYgMTg4LjAwNyA2NS45NTE2IDE4Ni43MDcgNjMuMTYzOUwxODUuNzIgNjEuMDQ3MkwxODUuNTQzIDUwLjY0MDNMMTg1LjM2NyA0MC4yMzM0TDE4My4wNjEgNDIuNTU0NEMxNzQuNjEgNTEuMDYwOCAxNzQuNjkyIDY0Ljg0NzIgMTgzLjI0NSA3My40QzE4OC43NDYgNzguOTAxOCAxOTYuNjM5IDgxLjExNDMgMjA0LjAyNSA3OS4yMjUyVjc5LjIyNTJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K') !important;
        }
    `],
    template: `
    <form class="form-inline">
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary calendar-{{color}}" (click)="d.toggle()" type="button" id="button-toggle" attr.aria-label="Open calendar"></button>
                </div>
            <input class="form-control calendar-input" #bdatepicker [footerTemplate]="footerTemplate" placeholder="DD/MM/YYYY" name="dp" [(ngModel)]="model" ngbDatepicker #d="ngbDatepicker" aria-label="Calendar" aria-describedby="button-toggle">
            </div>
        </div>
    </form>
    <ng-template #footerTemplate>
        <hr class="my-0">
        <button class="btn btn-primary btn-sm m-2 float-left" attr.aria-label="Today" (click)="model = today; d.close()">Today</button>
        <button class="btn btn-secondary btn-sm m-2 float-right" attr.aria-label="Close" (click)="d.close()">Close</button>
    </ng-template>
`,
    providers: [{provide: NgbDateParserFormatter, useClass: DateParserFormatter}]
})
export class OCalendarComponent {
    public model: NgbDateStruct;
    public today = this.calendar.getToday();

    @Input()
    public color: string;
    constructor(private calendar: NgbCalendar) {}
 }
