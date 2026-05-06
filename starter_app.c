#include <furi.h>
#include <gui/gui.h>
#include <input/input.h>
#include <stdio.h>

#define TAG "portfolio_companion"

typedef enum {
    VIEW_STATS,
    VIEW_PROJECTS,
    VIEW_ABOUT,
} ViewMode;

typedef struct {
    ViewMode current_view;
    uint32_t selected_project;
} PortfolioCompanionState;

typedef struct {
    InputEvent input;
} PortfolioCompanionEvent;

static void portfolio_companion_draw_callback(Canvas* canvas, void* context) {
    PortfolioCompanionState* state = context;

    canvas_clear(canvas);
    canvas_set_font(canvas, FontPrimary);
    canvas_draw_str(canvas, 4, 12, "Portfolio");

    canvas_set_font(canvas, FontSecondary);

    if(state->current_view == VIEW_STATS) {
        canvas_draw_str(canvas, 4, 28, "[ Stats ] Projects  About");
        canvas_draw_str(canvas, 4, 39, "");
        canvas_draw_str(canvas, 4, 50, "Projects: 4");
        canvas_draw_str(canvas, 4, 61, "Tech: React, Next.js, C");
    } else if(state->current_view == VIEW_PROJECTS) {
        canvas_draw_str(canvas, 4, 28, " Stats  [ Projects ] About");
        canvas_draw_str(canvas, 4, 39, "");

        const char* projects[] = {"MuHome", "Portfolio", "Automotive", "Devices"};
        uint32_t selected = state->selected_project % 4;

        canvas_draw_str(canvas, 4, 50, projects[selected]);
        canvas_draw_str(canvas, 4, 61, "Press OK for details");
    } else {
        canvas_draw_str(canvas, 4, 28, " Stats  Projects  [ About ]");
        canvas_draw_str(canvas, 4, 39, "");
        canvas_draw_str(canvas, 4, 50, "Muhammad Rafiq");
        canvas_draw_str(canvas, 4, 61, "Software x Product Design");
    }
}

static void portfolio_companion_input_callback(InputEvent* input_event, void* context) {
    FuriMessageQueue* event_queue = context;
    PortfolioCompanionEvent event = {.input = *input_event};
    furi_message_queue_put(event_queue, &event, FuriWaitForever);
}

int32_t portfolio_companion_app(void* p) {
    UNUSED(p);

    PortfolioCompanionState state = {.current_view = VIEW_STATS, .selected_project = 0};
    PortfolioCompanionEvent event;
    bool running = true;

    FuriMessageQueue* event_queue = furi_message_queue_alloc(8, sizeof(PortfolioCompanionEvent));
    ViewPort* view_port = view_port_alloc();
    Gui* gui = furi_record_open(RECORD_GUI);

    view_port_draw_callback_set(view_port, portfolio_companion_draw_callback, &state);
    view_port_input_callback_set(view_port, portfolio_companion_input_callback, event_queue);
    gui_add_view_port(gui, view_port, GuiLayerFullscreen);

    while(running) {
        FuriStatus status = furi_message_queue_get(event_queue, &event, FuriWaitForever);
        if(status != FuriStatusOk) {
            continue;
        }

        if(event.input.type != InputTypeShort) {
            continue;
        }

        if(event.input.key == InputKeyBack) {
            running = false;
        } else if(event.input.key == InputKeyRight) {
            state.current_view = (state.current_view + 1) % 3;
            FURI_LOG_I(TAG, "View changed to %u", state.current_view);
            view_port_update(view_port);
        } else if(event.input.key == InputKeyLeft) {
            state.current_view = (state.current_view == 0) ? 2 : state.current_view - 1;
            FURI_LOG_I(TAG, "View changed to %u", state.current_view);
            view_port_update(view_port);
        } else if(event.input.key == InputKeyDown && state.current_view == VIEW_PROJECTS) {
            state.selected_project++;
            FURI_LOG_I(TAG, "Project selected: %lu", state.selected_project % 4);
            view_port_update(view_port);
        } else if(event.input.key == InputKeyUp && state.current_view == VIEW_PROJECTS) {
            state.selected_project = (state.selected_project == 0) ? 3 :
                                                                     state.selected_project - 1;
            FURI_LOG_I(TAG, "Project selected: %lu", state.selected_project % 4);
            view_port_update(view_port);
        }
    }

    gui_remove_view_port(gui, view_port);
    view_port_free(view_port);
    furi_record_close(RECORD_GUI);
    furi_message_queue_free(event_queue);

    return 0;
}
