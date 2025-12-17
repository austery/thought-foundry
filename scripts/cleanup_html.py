#!/usr/bin/env python3
"""
HTML Tag Cleanup Script for Thought Foundry Markdown Files

This script cleans up HTML tags in markdown files:
- Converts <span class="speaker-name">Name:</span> to **Name**:
- Removes language divs and spans like <div class="lang-en">, <span class="lang-title">
- Removes all other HTML tags while preserving content
"""

import re
import sys
import os

def clean_html_tags(content):
    """
    Clean HTML tags from markdown content according to specified rules.
    
    Args:
        content (str): The original markdown content with HTML tags
        
    Returns:
        str: Cleaned markdown content
    """
    
    # Step 1: Convert speaker name spans to markdown bold format
    # Pattern: <span class="speaker-name">Name:</span> -> **Name**:
    speaker_pattern = r'<span class="speaker-name">([^<]+):</span>'
    content = re.sub(speaker_pattern, r'**\1**:', content)
    
    # Step 2: Remove language title spans completely (including content)
    # Pattern: <span class="lang-title">...</span>
    lang_title_pattern = r'<span class="lang-title">[^<]*</span>'
    content = re.sub(lang_title_pattern, '', content)
    
    # Step 3: Remove language div tags but keep content
    # Pattern: <div class="lang-en"> and <div class="lang-zh">
    content = re.sub(r'<div class="lang-en">', '', content)
    content = re.sub(r'<div class="lang-zh">', '', content)
    content = re.sub(r'</div>', '', content)
    
    # Step 4: Remove any remaining HTML tags but preserve their content
    # This catches any other HTML tags we might have missed
    html_tag_pattern = r'<[^>]+>'
    content = re.sub(html_tag_pattern, '', content)
    
    # Step 5: Clean up multiple consecutive empty lines
    # Replace multiple newlines with maximum of 2 newlines
    content = re.sub(r'\n\s*\n\s*\n+', '\n\n', content)
    
    # Step 6: Remove trailing whitespace from lines
    lines = content.split('\n')
    lines = [line.rstrip() for line in lines]
    content = '\n'.join(lines)
    
    return content

def process_file(file_path):
    """
    Process a single markdown file to clean HTML tags.
    
    Args:
        file_path (str): Path to the markdown file to process
    """
    
    try:
        # Read the original file
        with open(file_path, 'r', encoding='utf-8') as f:
            original_content = f.read()
        
        # Clean the content
        cleaned_content = clean_html_tags(original_content)
        
        # Write back to the same file
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)
        
        print(f"✅ Successfully cleaned HTML tags in: {file_path}")
        
    except Exception as e:
        print(f"❌ Error processing {file_path}: {str(e)}")

def main():
    """Main function to run the HTML cleanup script."""
    
    if len(sys.argv) != 2:
        print("Usage: python cleanup_html.py <file_path>")
        print("Example: python cleanup_html.py /path/to/your/file.md")
        sys.exit(1)
    
    file_path = sys.argv[1]
    
    # Check if file exists
    if not os.path.exists(file_path):
        print(f"❌ Error: File not found: {file_path}")
        sys.exit(1)
    
    # Check if it's a markdown file
    if not file_path.endswith('.md'):
        print(f"❌ Error: Not a markdown file: {file_path}")
        sys.exit(1)
    
    print(f"🧹 Cleaning HTML tags in: {file_path}")
    process_file(file_path)
    print("✨ HTML cleanup completed!")

if __name__ == "__main__":
    main()
