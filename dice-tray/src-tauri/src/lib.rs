//! Blackbox Protocol Dice Tray: the Catalyst dice tray as a standalone app.
//!
//! The tray runs entirely in the webview (rolling, 3D dice, sound, history and
//! settings). It needs no backend commands: Catalyst's campaign roll logs
//! belong to Catalyst projects, which this app does not open.

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running Blackbox Protocol Dice Tray");
}
